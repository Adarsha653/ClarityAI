"""
ClarityAI — AI Mental Wellness Platform
FastAPI Backend
"""

from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime, timedelta
import jwt, bcrypt, uuid, os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

# ── Config ──────────────────────────────────────────────────────────────────
SECRET_KEY = os.getenv("JWT_SECRET", "clarityai-secret-key-change-in-production")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24 * 7  # 7 days

genai.configure(api_key=GEMINI_API_KEY)

app = FastAPI(title="ClarityAI API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173", "*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")

# ── JSON file persistence (local dev — survives server restarts) ──────────────
import json as _json
DB_FILE = "db.json"

def _load_db():
    if os.path.exists(DB_FILE):
        try:
            with open(DB_FILE, "r") as f:
                data = _json.load(f)
                return data.get("users", {}), data.get("sessions", {})
        except Exception:
            pass
    return {}, {}

def _save_db():
    with open(DB_FILE, "w") as f:
        _json.dump({"users": users_db, "sessions": sessions_db}, f, indent=2)

users_db, sessions_db = _load_db()

# ── Models ───────────────────────────────────────────────────────────────────

class UserRegister(BaseModel):
    name: str
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str
    user: dict

class StressAnswers(BaseModel):
    sleep: str
    workload: int
    mood: str
    social: str
    anxiety: int
    energy: str

class ChatMessage(BaseModel):
    role: str  # "user" | "assistant"
    content: str

class ChatRequest(BaseModel):
    messages: List[ChatMessage]
    language: str = "en"  # "en" | "ne"
    stress_score: Optional[int] = None
    situation: Optional[str] = None
    reason: Optional[str] = None
    self_doubt: Optional[str] = None
    session_history_summary: Optional[str] = None
    current_page: Optional[str] = None
    time_of_day: Optional[str] = None

class SessionCreate(BaseModel):
    before_score: int
    after_score: int
    situation: Optional[str] = ""
    reason: Optional[str] = ""
    duration_minutes: int = 10

class SessionResponse(BaseModel):
    id: str
    user_id: str
    before_score: int
    after_score: int
    improvement: int
    situation: str
    duration_minutes: int
    created_at: str


# ── Auth Utils ───────────────────────────────────────────────────────────────

def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()

def verify_password(password: str, hashed: str) -> bool:
    return bcrypt.checkpw(password.encode(), hashed.encode())

def create_token(data: dict) -> str:
    payload = data.copy()
    payload["exp"] = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)

def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id = payload.get("sub")
        if not user_id or user_id not in users_db:
            raise HTTPException(status_code=401, detail="Invalid token")
        return users_db[user_id]
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except Exception:
        raise HTTPException(status_code=401, detail="Invalid token")


# ── Stress Calculation ────────────────────────────────────────────────────────

def calculate_stress(answers: StressAnswers) -> int:
    score = 0
    sleep_map = {"Less than 4h": 30, "4–6h": 20, "6–8h": 8, "8h+": 0}
    score += sleep_map.get(answers.sleep, 10)
    score += answers.workload * 3
    mood_map = {"Very Low": 20, "Low": 14, "Neutral": 8, "Good": 3, "Excellent": 0}
    score += mood_map.get(answers.mood, 8)
    social_map = {"Very Unsatisfied": 16, "Unsatisfied": 11, "Neutral": 6, "Satisfied": 2, "Very Satisfied": 0}
    score += social_map.get(answers.social, 6)
    score += answers.anxiety * 2.5
    energy_map = {"Exhausted": 12, "Tired": 8, "Okay": 4, "Energized": 1, "Very Energized": 0}
    score += energy_map.get(answers.energy, 4)
    return min(100, round(score))


# ── Routes ────────────────────────────────────────────────────────────────────

@app.get("/")
def root():
    return {"message": "ClarityAI API v1.0 — Mental Wellness Platform", "status": "running"}

@app.get("/health")
def health():
    return {"status": "healthy", "timestamp": datetime.utcnow().isoformat()}


# ── Auth ──────────────────────────────────────────────────────────────────────

@app.post("/auth/register", response_model=Token)
def register(data: UserRegister):
    # Check if email exists
    for u in users_db.values():
        if u["email"] == data.email:
            raise HTTPException(status_code=400, detail="Email already registered")

    user_id = str(uuid.uuid4())
    user = {
        "id": user_id,
        "name": data.name,
        "email": data.email,
        "password_hash": hash_password(data.password),
        "created_at": datetime.utcnow().isoformat(),
        "avatar": data.name[0].upper(),
    }
    users_db[user_id] = user
    _save_db()
    token = create_token({"sub": user_id, "email": data.email})
    safe_user = {k: v for k, v in user.items() if k != "password_hash"}
    return {"access_token": token, "token_type": "bearer", "user": safe_user}


@app.post("/auth/login", response_model=Token)
def login(data: UserLogin):
    user = next((u for u in users_db.values() if u["email"] == data.email), None)
    if not user or not verify_password(data.password, user["password_hash"]):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    token = create_token({"sub": user["id"], "email": user["email"]})
    safe_user = {k: v for k, v in user.items() if k != "password_hash"}
    return {"access_token": token, "token_type": "bearer", "user": safe_user}


@app.get("/auth/me")
def get_me(current_user: dict = Depends(get_current_user)):
    return {k: v for k, v in current_user.items() if k != "password_hash"}


# ── Stress Calculator ─────────────────────────────────────────────────────────

@app.post("/stress/calculate")
def calculate(answers: StressAnswers, current_user: dict = Depends(get_current_user)):
    score = calculate_stress(answers)
    if score >= 70:
        level, emoji = "High", "🔴"
    elif score >= 40:
        level, emoji = "Moderate", "🟡"
    else:
        level, emoji = "Low", "🟢"

    return {
        "score": score,
        "level": level,
        "emoji": emoji,
        "message": f"Your stress level is {level.lower()} at {score}%.",
        "recommendations": get_recommendations(score),
    }

def get_recommendations(score: int) -> List[str]:
    if score >= 70:
        return ["Deep breathing exercises", "5-min meditation", "Listen to calm music", "Take a short walk"]
    if score >= 40:
        return ["Light stretching", "Listen to upbeat music", "Talk to a friend", "Watch something funny"]
    return ["Maintain your routine", "Celebrate your wellness", "Help someone else today"]


# ── AI Chat Agent ─────────────────────────────────────────────────────────────

def build_system_prompt(req: ChatRequest) -> str:
    """Build a context-aware system prompt for the ClarityAI agent."""
    if req.language == "ne":
        prompt = """तपाईं ClarityAI हुनुहुन्छ, एक AI करियर वेलनेस कोच।
नियमहरू:
- अधिकतम २-३ छोटो वाक्यहरूमा उत्तर दिनुहोस्
- न्यानो, प्रेरणादायक र सहानुभूतिपूर्ण हुनुहोस्
- केवल करियर तनाव, बर्नआउट र मानसिक स्वास्थ्यमा केन्द्रित रहनुहोस्
- CBT (संज्ञानात्मक व्यवहार थेरापी) प्रविधिहरू प्रयोग गर्नुहोस्
- असम्बन्धित विषयहरूमा: "म तपाईंको करियर वेलनेसमा सहयोग गर्न यहाँ छु।" भन्नुहोस्"""
    else:
        prompt = """You are ClarityAI, an AI career wellness coach for working professionals.
Rules:
- Reply in MAXIMUM 2-3 short sentences
- Be warm, specific, and actionable — never generic
- Use CBT techniques when appropriate (cognitive reframing, thought challenging, grounding exercises)
- Focus ONLY on career stress, burnout, imposter syndrome, and workplace wellbeing
- If user asks about unrelated topics, respond: "I'm here to help with your career wellness. Let's stay focused on that."
- Never provide medical diagnoses or prescriptions
- Reference the user's specific context proactively — don't ask what's wrong if you already know
- If stress is high (70%+), be more urgent and caring
- If session history exists, reference their past progress to motivate them"""

    # Inject all available context
    ctx_parts = []
    if req.stress_score is not None:
        level = "HIGH - be urgent and caring" if req.stress_score >= 70 else "MODERATE" if req.stress_score >= 40 else "LOW - celebrate this"
        ctx_parts.append(f"Current stress score: {req.stress_score}% ({level})")
    if req.situation:
        ctx_parts.append(f"Situation: \"{req.situation}\"")
    if req.reason:
        ctx_parts.append(f"Stress trigger: \"{req.reason}\"")
    if req.self_doubt:
        ctx_parts.append(f"Self-doubt thought: \"{req.self_doubt}\" — use CBT thought challenging on this")
    if req.session_history_summary:
        ctx_parts.append(f"Session history: {req.session_history_summary}")
    if req.current_page:
        ctx_parts.append(f"Currently viewing: {req.current_page} page")
    if req.time_of_day:
        ctx_parts.append(f"Time of day: {req.time_of_day}")

    if ctx_parts:
        prompt += "\n\nUSER CONTEXT:\n- " + "\n- ".join(ctx_parts)

    return prompt


@app.post("/chat")
async def chat(req: ChatRequest, current_user: dict = Depends(get_current_user)):
    try:
        model = genai.GenerativeModel("gemini-2.5-flash")
        system = build_system_prompt(req)

        history = []
        for m in req.messages[:-1]:
            history.append({
                "role": "user" if m.role == "user" else "model",
                "parts": [m.content]
            })

        last_msg = req.messages[-1].content if req.messages else ""
        full_prompt = f"{system}\n\nUser: {last_msg}"

        chat_session = model.start_chat(history=history)
        response = chat_session.send_message(full_prompt)
        reply = response.text.strip()

        return {"reply": reply, "language": req.language}

    except Exception as e:
        print(f"[CHAT ERROR] {type(e).__name__}: {e}")
        import random
        fallbacks_en = [
            "I hear you, and your feelings are valid. You're not alone. 💙",
            "Take a deep breath — this moment will pass. You are stronger than you know. 🌟",
            "Reaching out takes courage. I'm here to support you every step of the way. 💙",
        ]
        fallbacks_ne = [
            "तपाईंको भावनाहरू सुन्न मलाई खुसी लाग्छ। तपाईं एक्लै हुनुहुन्न। 💙",
            "श्वास लिनुहोस् — यो क्षण पनि बित्नेछ। 🌟",
        ]
        fallback = random.choice(fallbacks_ne if req.language == "ne" else fallbacks_en)
        return {"reply": fallback, "language": req.language, "fallback": True}


# ── Sessions ──────────────────────────────────────────────────────────────────

@app.post("/sessions", response_model=SessionResponse)
def create_session(data: SessionCreate, current_user: dict = Depends(get_current_user)):
    session_id = str(uuid.uuid4())
    session = {
        "id": session_id,
        "user_id": current_user["id"],
        "before_score": data.before_score,
        "after_score": data.after_score,
        "improvement": max(0, data.before_score - data.after_score),
        "situation": data.situation or "",
        "reason": data.reason or "",
        "duration_minutes": data.duration_minutes,
        "created_at": datetime.utcnow().isoformat(),
    }
    if current_user["id"] not in sessions_db:
        sessions_db[current_user["id"]] = []
    sessions_db[current_user["id"]].append(session)
    _save_db()
    return session


@app.get("/sessions", response_model=List[SessionResponse])
def get_sessions(current_user: dict = Depends(get_current_user)):
    return sessions_db.get(current_user["id"], [])


@app.get("/sessions/stats")
def get_stats(current_user: dict = Depends(get_current_user)):
    user_sessions = sessions_db.get(current_user["id"], [])
    if not user_sessions:
        return {"total": 0, "avg_before": 0, "avg_after": 0, "total_reduction": 0}
    return {
        "total": len(user_sessions),
        "avg_before": round(sum(s["before_score"] for s in user_sessions) / len(user_sessions)),
        "avg_after": round(sum(s["after_score"] for s in user_sessions) / len(user_sessions)),
        "total_reduction": sum(s["improvement"] for s in user_sessions),
    }