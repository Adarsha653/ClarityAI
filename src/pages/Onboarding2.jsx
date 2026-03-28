import { useState } from 'react';
import { Users, User, Award, Mic, ArrowLeft } from 'lucide-react';

export default function Onboarding2() {
  const [guidanceStyle, setGuidanceStyle] = useState('peer'); // 'coach', 'peer', 'mentor'
  const [sessionLength, setSessionLength] = useState('standard');
  const [notificationCadence, setNotificationCadence] = useState('daily');
  const [voiceMode, setVoiceMode] = useState(false);

  const styles = [
    {
      id: 'coach',
      icon: <User className="w-8 h-8" />,
      title: 'Coach',
      desc: 'Direct, motivating, and action-oriented.',
      color: 'blue'
    },
    {
      id: 'peer',
      icon: <Users className="w-8 h-8" />,
      title: 'Peer',
      desc: 'Empathetic, casual, and understanding.',
      color: 'emerald'
    },
    {
      id: 'mentor',
      icon: <Award className="w-8 h-8" />,
      title: 'Mentor',
      desc: 'Wise, reflective, and guiding.',
      color: 'purple'
    },
  ];

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
          
          {/* Left Sidebar - Progress */}
          <div className="lg:w-80 bg-gray-50 p-10 border-r">
            <div className="mb-8">
              <p className="text-sm text-gray-500">Step 2 of 2</p>
              <h2 className="text-2xl font-semibold text-gray-900 mt-1">Almost there!</h2>
            </div>

            <div className="space-y-8">
              {/* Step 1 - Completed */}
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">✓</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Personalize Experience</p>
                  <p className="text-sm text-gray-500">Role and concerns defined.</p>
                </div>
              </div>

              {/* Step 2 - Active */}
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">2</div>
                <div>
                  <p className="font-medium text-gray-900">Preferences & Reminders</p>
                  <p className="text-sm text-gray-500">Set how Clarity AI interacts with you.</p>
                </div>
              </div>
            </div>

            {/* Tip Box */}
            <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-5 text-sm">
              <div className="flex gap-2">
                <span>🛡️</span>
                <p className="text-blue-700">
                  Your preferences help us deliver a supportive experience that fits seamlessly into your routine.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-10 lg:p-16">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Tailor your guidance.</h1>
              <p className="text-gray-600 text-lg">
                Choose how you want Clarity AI to support you.
              </p>

              {/* Preferred Guidance Style */}
              <div className="mt-12">
                <h3 className="font-medium text-gray-900 mb-6">Preferred Guidance Style</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {styles.map((style) => (
                    <div
                      key={style.id}
                      onClick={() => setGuidanceStyle(style.id)}
                      className={`p-6 rounded-2xl border-2 cursor-pointer transition-all flex flex-col items-center text-center ${
                        guidanceStyle === style.id 
                          ? 'border-blue-600 bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-${style.color}-100 text-${style.color}-600`}>
                        {style.icon}
                      </div>
                      <p className="font-semibold text-gray-900">{style.title}</p>
                      <p className="text-sm text-gray-600 mt-2">{style.desc}</p>
                      {guidanceStyle === style.id && (
                        <div className="mt-4 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Session Length & Notification */}
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Ideal Session Length</h3>
                  <select 
                    value={sessionLength}
                    onChange={(e) => setSessionLength(e.target.value)}
                    className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-600 bg-white"
                  >
                    <option value="standard">Standard (15 mins)</option>
                    <option value="short">Quick (5 mins)</option>
                    <option value="deep">Deep Dive (30 mins)</option>
                  </select>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Notification Cadence</h3>
                  <select 
                    value={notificationCadence}
                    onChange={(e) => setNotificationCadence(e.target.value)}
                    className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-600 bg-white"
                  >
                    <option value="daily">Daily Reminders</option>
                    <option value="weekly">Weekly Check-ins</option>
                    <option value="asneeded">As Needed</option>
                  </select>
                </div>
              </div>

              {/* Voice Mode */}
              <div className="mt-12 bg-orange-50 border border-orange-100 rounded-2xl p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
                    <Mic className="w-7 h-7 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Enable Voice Mode (Optional)</p>
                    <p className="text-sm text-gray-600">Allow Clarity AI to use voice interactions for hands-free sessions.</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={voiceMode} 
                    onChange={() => setVoiceMode(!voiceMode)}
                    className="sr-only peer"
                  />
                  <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              {/* Bottom Buttons */}
              <div className="mt-16 flex items-center justify-between">
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition">
                  <ArrowLeft className="w-5 h-5" />
                  Back
                </button>

                <button 
                  onClick={() => alert("Setup Complete! 🎉 Welcome to Clarity AI")}
                  className="px-10 py-4 bg-gray-900 hover:bg-black text-white font-semibold rounded-2xl transition-all active:scale-95 flex items-center gap-3"
                >
                  Finish Setup 
                  <span>✓</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}