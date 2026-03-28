import { useState } from 'react';
import { User, GraduationCap, Briefcase, ArrowRight } from 'lucide-react';

export default function Onboarding1() {
  const [selectedRole, setSelectedRole] = useState('student');
  
  const [concerns, setConcerns] = useState({
    burnout: true,
    workload: true,
    uncertainty: false,
    anxiety: false,
    imposter: false,
  });

  const [primaryGoal, setPrimaryGoal] = useState('Reduce daily stress and anxiety');

  const toggleConcern = (key) => {
    setConcerns(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Fixed: Now properly counting selected concerns
  const selectedCount = Object.values(concerns).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-10 py-6 border-b">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-600 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-2xl font-semibold text-gray-900">Clarity AI</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <button className="text-gray-500 hover:text-gray-700 flex items-center gap-1">
              ← Back
            </button>
            <button className="text-gray-500 hover:text-gray-700 flex items-center gap-1">
              Skip →
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          
          {/* Left Sidebar */}
          <div className="lg:w-80 bg-gray-50 p-10 border-r">
            <div className="mb-8">
              <p className="text-sm text-gray-500">Step 1 of 2</p>
              <h2 className="text-2xl font-semibold text-gray-900 mt-1">Let's get to know you</h2>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">1</div>
                <div>
                  <p className="font-medium text-gray-900">Personalize Experience</p>
                  <p className="text-sm text-gray-500">Tell us about your role and concerns.</p>
                </div>
              </div>

              <div className="flex gap-4 opacity-50">
                <div className="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-400 font-medium">2</div>
                <div>
                  <p className="font-medium text-gray-500">Set Your Goals</p>
                  <p className="text-sm text-gray-500">Define what success looks like for you.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-5 text-sm">
              <div className="flex gap-2">
                <span>💡</span>
                <p className="text-blue-700">
                  We use this information to tailor Clarity AI recommendations and coaching specifically to your daily challenges.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-10 lg:p-16">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold text-gray-900 mb-3">Welcome to your safe space.</h1>
              <p className="text-gray-600 text-lg">
                To provide the best support, help us understand where you are right now.<br />
                There are no wrong answers.
              </p>

              {/* Role Selection */}
              <div className="mt-12">
                <h3 className="font-medium text-gray-900 mb-4">Which best describes your current role?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div 
                    onClick={() => setSelectedRole('student')}
                    className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${selectedRole === 'student' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <GraduationCap className="w-8 h-8 text-blue-600 mb-3" />
                        <p className="font-semibold">Student</p>
                        <p className="text-sm text-gray-600 mt-1">Navigating studies, exams, and future career planning.</p>
                      </div>
                      {selectedRole === 'student' && (
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div 
                    onClick={() => setSelectedRole('professional')}
                    className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${selectedRole === 'professional' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <Briefcase className="w-8 h-8 text-emerald-600 mb-3" />
                        <p className="font-semibold">Professional</p>
                        <p className="text-sm text-gray-600 mt-1">Managing workload, career growth, and work-life balance.</p>
                      </div>
                      {selectedRole === 'professional' && (
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Concerns - Now with count */}
              <div className="mt-12">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-gray-900">What are your top concerns right now?</h3>
                  <span className="text-sm text-gray-500">
                    {selectedCount}/3 selected
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { id: 'burnout', label: 'Feeling burnt out / Exhaustion' },
                    { id: 'workload', label: 'Overwhelming workload' },
                    { id: 'uncertainty', label: 'Career uncertainty' },
                    { id: 'anxiety', label: 'Interview / Performance anxiety' },
                    { id: 'imposter', label: 'Imposter syndrome' },
                  ].map((concern) => (
                    <label 
                      key={concern.id}
                      className={`flex items-center gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${concerns[concern.id] ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'}`}
                    >
                      <input 
                        type="checkbox" 
                        checked={concerns[concern.id]} 
                        onChange={() => toggleConcern(concern.id)}
                        className="w-5 h-5 accent-blue-600"
                      />
                      <span className="text-gray-700">{concern.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Primary Goal */}
              <div className="mt-12">
                <h3 className="font-medium text-gray-900 mb-3">What is your primary goal with Clarity AI?</h3>
                <select 
                  value={primaryGoal}
                  onChange={(e) => setPrimaryGoal(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-600 text-gray-700 bg-white"
                >
                  <option>Reduce daily stress and anxiety</option>
                  <option>Build better work-life balance</option>
                  <option>Overcome self-doubt and imposter syndrome</option>
                  <option>Improve focus and productivity</option>
                  <option>Prepare confidently for career transitions</option>
                </select>
              </div>

              <p className="text-center text-sm text-gray-500 mt-12">
                You can change these settings later in your profile.
              </p>

              {/* Continue Button */}
              <div className="mt-10 flex justify-end">
                <button 
                  onClick={() => alert("Moving to Step 2 → Set Your Goals")}
                  className="flex items-center gap-3 bg-gray-900 hover:bg-black text-white px-10 py-4 rounded-2xl font-semibold transition-all active:scale-95"
                >
                  Continue to Step 2 
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}