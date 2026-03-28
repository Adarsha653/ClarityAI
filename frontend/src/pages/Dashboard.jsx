import { useState } from 'react';
import { 
  Home, 
  Zap, 
  TrendingUp, 
  BookOpen, 
  User, 
  LogOut,
  Award,
  Target
} from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'session', label: 'Stress Session', icon: Zap },
    { id: 'progress', label: 'Progress & Recovery', icon: TrendingUp },
    { id: 'library', label: 'Content Library', icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      
      {/* Sidebar */}
      <div className="w-72 bg-white border-r border-gray-200 h-screen fixed flex flex-col">
        <div className="p-6 flex items-center gap-3 border-b">
          <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center">
            <span className="text-white font-bold text-2xl">C</span>
          </div>
          <div>
            <span className="text-2xl font-semibold text-gray-900">Clarity AI</span>
          </div>
        </div>

        <div className="p-6 flex-1">
          <div className="text-xs font-medium text-gray-500 mb-4 px-3">MAIN</div>
          
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition-all ${
                    activeTab === item.id 
                      ? 'bg-blue-50 text-blue-600 font-medium' 
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* User Profile at Bottom */}
        <div className="p-6 border-t mt-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center text-white font-medium">
              AM
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">Alex Morgan</p>
              <p className="text-xs text-gray-500">Student</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 ml-72 p-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Greeting */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900">
              Good morning, Alex 👋
            </h1>
            <p className="text-gray-600 mt-1">Let's check in on your well-being today.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Current Stress Level */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-8 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-6">Current Stress Level</h3>
              <div className="flex justify-center mb-6">
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="52" fill="none" stroke="#e5e7eb" strokeWidth="12"/>
                    <circle 
                      cx="60" cy="60" r="52" 
                      fill="none" 
                      stroke="#3b82f6" 
                      strokeWidth="12"
                      strokeDasharray="327"
                      strokeDashoffset="80"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-5xl font-bold text-gray-900">68</div>
                    <div className="text-sm text-gray-500">Medium</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Low</span>
                <span>Med</span>
                <span>High</span>
              </div>
            </div>

            {/* Quick Start Session */}
            <div className="lg:col-span-5 bg-linear-to-br from-blue-600 to-indigo-600 text-white rounded-3xl p-8 flex flex-col">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1 rounded-full text-sm mb-6">
                  Feeling Overwhelmed?
                </div>
                <h2 className="text-3xl font-semibold leading-tight mb-4">
                  Start a quick 5-minute guided session to recenter and find your focus.
                </h2>
              </div>
              <button className="mt-auto bg-white text-blue-600 font-semibold py-4 px-8 rounded-2xl hover:bg-gray-100 transition-all w-fit">
                Quick Start Session →
              </button>
            </div>

            {/* Daily Check-in */}
            <div className="lg:col-span-3 bg-white rounded-3xl p-8 border border-gray-100 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="font-medium">Daily Check-in</p>
                  <p className="text-sm text-emerald-600">Pending</p>
                </div>
                <div className="text-orange-500">
                  <span className="text-2xl">🔥</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-6">How are you feeling about your workload today? Take 30 seconds to log your mood.</p>
              
              <div className="flex gap-4 justify-center my-4">
                {['😟', '😐', '🙂', '😊'].map((emoji, i) => (
                  <button key={i} className="text-4xl hover:scale-125 transition-transform">{emoji}</button>
                ))}
              </div>

              <button className="mt-auto border border-gray-300 hover:bg-gray-50 py-3 rounded-2xl text-sm font-medium">
                Log Detailed Mood
              </button>
            </div>

            {/* Current Streak */}
            <div className="lg:col-span-12 bg-white rounded-3xl p-6 border border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-4xl">🔥</div>
                <div>
                  <p className="font-semibold text-lg">Current Streak</p>
                  <p className="text-gray-600">5 Days</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Keep it going!</p>
              </div>
            </div>
          </div>

          {/* Your Progress Section */}
          <div className="mt-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Your Progress</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: "⏱️", value: "12h", label: "Total Session Time" },
                { icon: "✅", value: "24", label: "Completed Sessions" },
                { icon: "⭐", value: "7 Day", label: "Zen Master Streak" },
                { icon: "🔒", value: "10", label: "Focus Quota" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-3xl p-6 border border-gray-100">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <p className="text-4xl font-bold text-gray-900">{item.value}</p>
                  <p className="text-gray-600 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended for You */}
          <div className="mt-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Recommended for You</h2>
              <button className="text-blue-600 font-medium text-sm">View All →</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-3xl p-6">
                <div className="text-blue-500 text-3xl mb-4">🧘</div>
                <p className="font-medium">Box Breathing</p>
                <p className="text-sm text-gray-600 mt-2">Quick reset for anxiety and stress management before studying.</p>
                <div className="text-xs text-blue-600 mt-6">3 min</div>
              </div>

              <div className="bg-yellow-50 rounded-3xl p-6">
                <div className="text-amber-500 text-3xl mb-4">💡</div>
                <p className="font-medium">Tech-Free Lunch</p>
                <p className="text-sm text-gray-600 mt-2">Take a 30-minute break without looking at any screens.</p>
                <div className="text-xs text-amber-600 mt-6">CHALLENGE • +50 XP</div>
              </div>

              <div className="bg-emerald-50 rounded-3xl p-6">
                <div className="text-emerald-500 text-3xl mb-4">📝</div>
                <p className="font-medium">Values Alignment</p>
                <p className="text-sm text-gray-600 mt-2">Reflect on the values most important in your future work.</p>
                <div className="text-xs text-emerald-600 mt-6">JOURNAL • 5 min</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}