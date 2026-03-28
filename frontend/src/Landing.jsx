//import { useState } from 'react'

function Landing() {
  //const [isChatOpen] = useState(true)

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">C</div>
            <span className="text-2xl font-semibold text-gray-900">Clarity AI</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Log in</a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all">
              Get Started Free
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="bg-linear-to-br from-blue-50 to-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-3xl text-sm font-medium">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              Your AI Career Coach is online
            </div>

            <h1 className="text-6xl leading-tight font-bold text-gray-900">
              Turn career<br />
              pressure into <span className="text-blue-600">clarity.</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-lg">
              Clarity AI helps high-performers manage burnout, navigate stress, 
              and find balance through empathetic AI guidance and actionable micro-steps.
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => alert("🎉 Session started! (Demo)")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-3xl font-semibold text-lg flex items-center gap-3 transition-all active:scale-95"
              >
                Start Your First Session →
              </button>
              <button className="border border-gray-300 hover:border-gray-400 px-8 py-4 rounded-3xl font-semibold text-lg flex items-center gap-3 transition-all">
                ▶️ See how it works
              </button>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-500">
              <div className="flex -space-x-3">
                <div className="w-7 h-7 bg-blue-200 rounded-full border-2 border-white flex items-center justify-center text-xs">👨‍💼</div>
                <div className="w-7 h-7 bg-purple-200 rounded-full border-2 border-white flex items-center justify-center text-xs">👩‍💼</div>
                <div className="w-7 h-7 bg-emerald-200 rounded-full border-2 border-white flex items-center justify-center text-xs">🧔</div>
              </div>
              <span>10,000+ professionals finding balance</span>
            </div>
          </div>

          {/* Right Chat Mock */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-md mx-auto md:mx-0 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-sm">C</div>
                <div>
                  <p className="font-semibold text-gray-900">Clarity AI</p>
                  <p className="text-emerald-500 text-sm flex items-center gap-1">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                    Active now
                  </p>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="space-y-8 mb-6">
              <div className="bg-gray-100 rounded-3xl rounded-tl-none px-5 py-3 max-w-[80%] text-gray-700">
                Hi there. I noticed you've had a long week. How are you feeling about your workload right now?
              </div>
              <div className="bg-blue-600 text-white rounded-3xl rounded-tr-none px-5 py-3 ml-auto max-w-[80%]">
                Honestly, pretty overwhelmed. The Q3 targets are stressing me out.
              </div>
              <div className="bg-gray-100 rounded-3xl rounded-tl-none px-5 py-3 max-w-[80%] text-gray-700">
                I hear you. It's completely normal to feel that way. Let's break this down.
              </div>
            </div>

            {/* Quick Options */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-orange-100 text-orange-700 text-xs px-4 py-2 rounded-3xl">Tight Deadlines</span>
              <span className="bg-purple-100 text-purple-700 text-xs px-4 py-2 rounded-3xl">Unclear Expectations</span>
              <span className="bg-blue-100 text-blue-700 text-xs px-4 py-2 rounded-3xl">Too Many Meetings</span>
            </div>

            <div className="border border-gray-200 rounded-3xl p-4 flex items-center gap-3">
              <input 
                type="text" 
                placeholder="Type your response..." 
                className="flex-1 outline-none bg-transparent text-sm"
              />
              <button className="w-9 h-9 bg-blue-600 text-white rounded-2xl flex items-center justify-center">↑</button>
            </div>
          </div>
        </div>
      </div>

      {/* You're not alone section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">You're not alone in feeling overwhelmed.</h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Modern work demands constant connectivity and high output, leaving little room for mental recovery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Burnout Cycle */}
          <div className="bg-pink-50 border border-pink-100 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-2xl flex items-center justify-center text-2xl">⚡</div>
              <h3 className="text-2xl font-semibold text-gray-900">The Burnout Cycle</h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✕</span>Endless task lists that never seem to shrink</li>
              <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✕</span>Imposter syndrome holding you back from speaking up</li>
              <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✕</span>Taking work stress home, affecting personal relationships</li>
              <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✕</span>Generic "wellness" advice that doesn't fit your reality</li>
            </ul>
          </div>

          {/* Clarity AI Approach */}
          <div className="bg-blue-600 text-white rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center text-2xl">🌱</div>
              <h3 className="text-2xl font-semibold">The Clarity AI Approach</h3>
            </div>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">✅ Personalized AI coaching that understands your specific context</li>
              <li className="flex items-start gap-3">✅ Bite-sized, 3-minute interventions you can do between meetings</li>
              <li className="flex items-start gap-3">✅ Science-backed cognitive behavioral techniques</li>
              <li className="flex items-start gap-3">✅ Private, secure space to process difficult work emotions</li>
            </ul>
          </div>
        </div>
      </div>

{/* ==================== HOW CLARITY AI HELPS YOU RECOVER ==================== */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-4xl font-bold text-gray-900 mb-16">
            How Clarity AI helps you recover
          </h2>

          <div className="space-y-24">

            {/* Step 1 - Measure Your Baseline */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="bg-[#1e3a8a] text-white rounded-3xl p-8 w-full max-w-sm">
                  <div className="text-center mb-6">
                    <p className="text-sm tracking-widest text-blue-300">Stress Calelator</p>
                  </div>
                  {/* Placeholder for your image */}
                  <div className="bg-white/10 rounded-2xl p-6 h-72 flex items-center justify-center border border-white/20">
                    <img 
                      src="/images/sess-calculator.png" 
                      alt="Stress Calculator" 
                      className="rounded-xl shadow-inner"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-semibold text-lg">1</div>
                  <h3 className="text-3xl font-semibold text-gray-900">Measure Your Baseline</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Use our quick Stress Calculator to quantify your current mental load. 
                  We analyze physiological self-reports and workload metrics to establish your baseline.
                </p>
              </div>
            </div>

            {/* Step 2 - Input Scenarios */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-semibold text-lg">2</div>
                  <h3 className="text-3xl font-semibold text-gray-900">Input Scenarios</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Log specific stressors using intuitive emojis and short text. 
                  "Difficult conversation with manager" or "Unclear project scope" — get it out of your head.
                </p>
              </div>

              <div className="flex justify-center">
                <div className="bg-blue-100 rounded-3xl p-8 w-full max-w-sm">
                  <div className="text-center mb-4">
                    <p className="text-sm font-medium text-blue-700">Mood tracking</p>
                    <p className="text-xs text-blue-600">Mood rating</p>
                  </div>
                  {/* Placeholder for Mood Emojis Image */}
                  <div className="bg-white rounded-2xl p-8 flex flex-wrap justify-center gap-4">
                    <span className="text-4xl">😊</span>
                    <span className="text-4xl">🙂</span>
                    <span className="text-4xl">😐</span>
                    <span className="text-4xl">🙁</span>
                    <span className="text-4xl">😟</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 - AI Coaching Chat */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="bg-white border border-gray-200 rounded-3xl p-8 w-full max-w-md shadow-sm">
                  <div className="space-y-6">
                    <div className="text-sm text-gray-500">Where are all these emotions coming from?</div>
                    <div className="bg-blue-50 text-blue-700 rounded-2xl px-5 py-3 text-sm">
                      Maybe you are stressed about the upcoming deadline.
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-semibold text-lg">3</div>
                  <h3 className="text-3xl font-semibold text-gray-900">AI Coaching Chat</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Engage in a guided micro-session. Our AI uses validated therapeutic frameworks 
                  to help reframe negative thoughts and build immediate coping strategies.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Everything you need to regain focus */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-center text-4xl font-bold mb-12">Everything you need to regain focus</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-6">📈</div>
            <h4 className="font-semibold text-xl">Progress Tracking</h4>
            <p className="text-gray-600 mt-3">Visualize your stress levels over time with detailed graphs.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl mb-6">🏆</div>
            <h4 className="font-semibold text-xl">Gamified Milestones</h4>
            <p className="text-gray-600 mt-3">Earn badges and build streaks for consistent mental health check-ins.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-3xl mb-6">📚</div>
            <h4 className="font-semibold text-xl">Personalized Content</h4>
            <p className="text-gray-600 mt-3">Get curated articles, audio exercises, and breathing techniques based on your stress profile.</p>
          </div>
        </div>
      </div>

      {/* Trusted by + Testimonial */}
      <div className="bg-blue-600 py-16 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div>
              <p className="text-4xl font-semibold uppercase tracking-widest">Trusted by professionals at top companies</p>
              <div className="flex gap-8 mt-6 text-4xl opacity-75">
                <p className="text-sm">See how Clarity AI  is changing the way people manage career anxiety and find their flow again.</p><br />
        
              </div>
              <div>G<span></span><span>Λ</span><span>✕</span></div>
            </div>
            <div className="bg-white text-gray-900 rounded-3xl p-8 max-w-md">
              <div className="flex gap-1 text-yellow-400 text-xl">★★★★★</div>
              <p className="mt-4 text-lg">
                "Clarity AI is like having a therapist and career coach in my pocket. 
                The 3-minute chat sessions before big presentations have completely eliminated my anxiety spikes."
              </p>
              <div className="flex items-center gap-4 mt-8">
                <div className="w-10 h-10 bg-gray-200 rounded-2xl"></div>
                <div>
                  <p className="font-semibold">Sarah Jenkins</p>
                  <p className="text-sm text-gray-500">Product Manager, Tech Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-5xl font-bold text-gray-900">Ready to find your balance?</h2>
        <p className="text-gray-600 mt-4 text-xl">Join thousands of professionals who have taken control of their career well-being.</p>
        <button className="mt-10 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-3xl text-xl font-semibold transition-all">
          Start Your Free Trial →
        </button>
        <p className="text-sm text-gray-500 mt-4">No credit card required • 14-day free trial</p>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center text-white">C</div>
              <span className="text-2xl font-semibold">Clarity AI</span>
            </div>
            <p className="text-gray-400 text-sm">Empowering professionals to manage burnout and thrive in their careers.</p>
          </div>
          <div>
            <p className="font-medium mb-4">Product</p>
            <p className="text-gray-400 text-sm space-y-2">Features<br/>Methodology<br/>Pricing<br/>Enterprise</p>
          </div>
          <div>
            <p className="font-medium mb-4">Company</p>
            <p className="text-gray-400 text-sm space-y-2">About Us<br/>Careers<br/>Blog<br/>Contact</p>
          </div>
          <div>
            <p className="font-medium mb-4">Legal</p>
            <p className="text-gray-400 text-sm space-y-2">Privacy Policy<br/>Terms of Service<br/>HIPAA Compliance</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Landing