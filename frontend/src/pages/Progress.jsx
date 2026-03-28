import React, { useState } from 'react';
import { 
  Home, 
  Zap, 
  TrendingUp, 
  BookOpen, 
  User, 
  ArrowLeft, 
  Trophy 
} from 'lucide-react';
import { useLocation } from 'react-router-dom';

const SessionComplete = () => {
  const location = useLocation();
  const [reflection, setReflection] = useState('yes');

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: Home },
    { path: '/session', label: 'Stress Session', icon: Zap },
    { path: '/progress', label: 'Progress & Recovery', icon: TrendingUp },
    { path: '/library', label: 'Content Library', icon: BookOpen },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col fixed overflow-hidden">
        
        {/* Logo Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-600 rounded-2xl flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-2xl leading-none">C</span>
            </div>
            <div className="font-semibold text-2xl tracking-tight text-gray-900">Clarity AI</div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-4 py-8 overflow-y-auto">
          <div className="text-xs uppercase tracking-widest font-semibold text-gray-500 mb-6 px-4">
            MENU
          </div>

          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <a
                  key={item.path}
                  href={item.path}
                  className={`flex items-center gap-3.5 px-5 py-3.5 rounded-2xl text-[15px] font-medium transition-all ${
                    isActive 
                      ? 'bg-blue-50 text-blue-700 shadow-sm' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Settings */}
          <div className="mt-10">
            <div className="text-xs uppercase tracking-widest font-semibold text-gray-500 mb-6 px-4">
              SETTINGS
            </div>
            <a
              href="/settings"
              className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl text-[15px] font-medium text-gray-700 hover:bg-gray-100 transition-all"
            >
              <User className="w-5 h-5" />
              Profile & Settings
            </a>
          </div>

          {/* Session Progress Box */}
          <div className="mt-10 mx-2">
            <div className="bg-gray-900 text-white rounded-3xl p-6">
              <p className="font-semibold text-lg mb-6">Session Progress</p>
              
              <div className="space-y-4">
                {[
                  { label: 'Calculator', completed: true },
                  { label: 'Scenario', completed: true },
                  { label: 'AI Chat', completed: true },
                  { label: 'Plan', completed: true },
                  { label: 'Feedback', completed: false },
                ].map((step, index) => (
                  <div key={index} className="flex items-center gap-3.5">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border transition-all
                      ${step.completed 
                        ? 'bg-emerald-500 border-emerald-500 text-white' 
                        : 'border-gray-600'}`}>
                      {step.completed && <span className="text-xs">✓</span>}
                    </div>
                    <span className={`text-sm transition-colors ${
                      step.completed ? 'text-gray-300' : 'text-gray-500'
                    }`}>
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom User Info */}
        <div className="border-t border-gray-100 p-5 mt-auto">
          <div className="flex items-center gap-3 px-2 py-2 hover:bg-gray-50 rounded-2xl cursor-pointer transition-colors">
            <div className="w-9 h-9 bg-linear-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-semibold text-sm shrink-0">
              AR
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm text-gray-900 truncate">Alex Rivera</div>
              <div className="text-xs text-gray-500 truncate">Student</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 ml-64 p-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft size={20} />
              <span className="font-medium">Session Complete</span>
            </button>
            <div className="text-sm text-gray-500">Step 5/5 • Reflection & Rewards</div>
          </div>

          <div className="flex items-center gap-4">
            <button className="px-6 py-2.5 text-gray-700 font-medium hover:bg-gray-100 rounded-2xl transition-colors">
              Exit
            </button>
            <button className="px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-2xl flex items-center gap-2 transition-all">
              Finish & Save 
              <span className="text-lg leading-none">✓</span>
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Content - Reflection */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Mood Comparison */}
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  How are you feeling now?
                </h2>
                <p className="text-gray-600 mb-8">
                  Let’s see how much your stress levels changed during this session.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Before */}
                  <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100">
                    <div className="text-xs uppercase tracking-widest text-gray-500 mb-4">BEFORE SESSION</div>
                    <div className="flex flex-col items-center py-4">
                      <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-4 text-4xl">
                        😣
                      </div>
                      <div className="text-4xl font-semibold text-red-600">8/10</div>
                      <div className="text-red-600 font-medium mt-1">High Stress</div>
                    </div>
                  </div>

                  {/* After */}
                  <div className="bg-blue-50 rounded-3xl p-6 border border-blue-100 relative">
                    <div className="absolute -top-3 right-6 bg-blue-600 text-white text-xs px-4 py-1 rounded-full font-medium">
                      Current
                    </div>
                    <div className="text-xs uppercase tracking-widest text-gray-500 mb-4">AFTER SESSION</div>
                    <div className="flex flex-col items-center py-4">
                      <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-4 text-4xl">
                        🙂
                      </div>
                      <div className="text-4xl font-semibold text-emerald-600">3/10</div>
                      <div className="text-emerald-600 font-medium mt-1">Manageable</div>
                    </div>
                  </div>
                </div>

                {/* Stress Scale */}
                <div className="mt-10">
                  <div className="flex justify-between text-xs text-gray-500 mb-3 px-1">
                    <span>Calm (1)</span>
                    <span>Moderate (5)</span>
                    <span>Overwhelmed (10)</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full relative">
                    <div className="absolute left-[30%] top-1/2 -translate-y-1/2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>
                  </div>
                </div>
              </div>

              {/* Session Reflection */}
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h3 className="font-semibold text-xl mb-6">Session Reflection</h3>
                <p className="text-gray-700 mb-6">
                  Was this session helpful in reducing your immediate intensity?
                </p>

                <div className="flex gap-4 mb-8">
                  <button
                    onClick={() => setReflection('yes')}
                    className={`flex-1 py-4 rounded-2xl font-medium transition-all ${
                      reflection === 'yes' 
                        ? 'bg-blue-600 text-white shadow-sm' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    Yes, it helped
                  </button>
                  <button
                    onClick={() => setReflection('no')}
                    className={`flex-1 py-4 rounded-2xl font-medium transition-all ${
                      reflection === 'no' 
                        ? 'bg-blue-600 text-white shadow-sm' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    Not really
                  </button>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-3">Optional Notes (Private Journal)</p>
                  <textarea
                    placeholder="Jot down any specific thoughts, what worked, or what didn’t..."
                    className="w-full h-32 p-5 bg-gray-50 border border-gray-200 rounded-3xl focus:outline-none focus:border-blue-500 text-sm resize-y"
                  />
                </div>
              </div>
            </div>

            {/* Right Sidebar Widgets */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Rewards Earned */}
              <div className="bg-linear-to-br from-gray-900 to-black text-white rounded-3xl p-7 shadow-xl">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-semibold text-xl">Rewards Earned</h3>
                  <Trophy className="w-6 h-6 text-yellow-400" />
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="text-3xl">✨</div>
                    <div>
                      <div className="font-semibold">+50 XP</div>
                      <div className="text-gray-400 text-sm">Session Completion</div>
                      <div className="text-emerald-400 text-xs mt-1">Level 4</div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-3xl">🔥</div>
                    <div>
                      <div className="font-semibold">3 Day Streak!</div>
                      <div className="text-gray-400 text-sm">Consistency</div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>“I’m Mindful” Badge</span>
                      <span className="text-emerald-400">4/5 Sessions</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-full w-[80%] bg-emerald-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Suggested Next Step */}
              <div className="bg-emerald-600 text-white rounded-3xl p-7 shadow-lg">
                <div className="uppercase text-xs tracking-widest mb-3 opacity-75">Suggested Next Step</div>
                <h3 className="text-2xl font-semibold leading-tight mb-6">
                  Start your 10min Guided Routine
                </h3>
                <p className="text-emerald-100 mb-8 text-[15px]">
                  You saved the “5-4-3-2-1 Grounding Exercise” to your plan. 
                  Now is a great time to do it.
                </p>
                <button className="w-full bg-white text-emerald-700 font-semibold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-emerald-50 transition-colors">
                  Start Routine 
                  <span className="text-xl leading-none">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionComplete;