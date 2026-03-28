import { ArrowLeft, Gift, Star, Flame } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import TopNav from '../components/Topnav';

export default function SessionComplete() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 ml-72">
        <TopNav />

        <div className="p-8 pt-24 max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-3">
                <button className="text-gray-500 hover:text-gray-700 flex items-center gap-2">
                  <ArrowLeft className="w-5 h-5" /> Back
                </button>
                <div>
                  <p className="text-sm text-gray-500">Step 5/5 • Reflection & Rewards</p>
                  <h1 className="text-3xl font-bold text-gray-900">Session Complete</h1>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="px-6 py-3 border border-gray-300 rounded-2xl font-medium">Exit</button>
              <button className="px-8 py-3 bg-blue-600 text-white rounded-2xl font-semibold flex items-center gap-2 hover:bg-blue-700 transition">
                Finish & Save <span>✓</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Mood Comparison */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-8">
              <h2 className="text-2xl font-semibold mb-8">How are you feeling now?</h2>
              <p className="text-gray-600 mb-8">Let's see how much your stress levels changed during this session.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Before Session */}
                <div className="bg-pink-50 rounded-3xl p-8 text-center">
                  <p className="text-sm text-gray-500 mb-4">BEFORE SESSION</p>
                  <div className="text-6xl mb-4">😣</div>
                  <p className="text-4xl font-bold text-pink-600">8/10</p>
                  <p className="text-pink-600 font-medium">High Stress</p>
                </div>

                {/* After Session */}
                <div className="bg-blue-50 rounded-3xl p-8 text-center relative">
                  <div className="absolute -top-3 right-6 bg-blue-600 text-white text-xs px-4 py-1 rounded-full">Current</div>
                  <p className="text-sm text-gray-500 mb-4">AFTER SESSION</p>
                  <div className="text-6xl mb-4">😊</div>
                  <p className="text-4xl font-bold text-blue-600">3/10</p>
                  <p className="text-blue-600 font-medium">Manageable</p>
                </div>
              </div>

              {/* Stress Slider */}
              <div className="mt-10">
                <div className="flex justify-between text-xs text-gray-500 mb-2">
                  <span>Calm (1)</span>
                  <span>Moderate (5)</span>
                  <span>Overwhelmed (10)</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  defaultValue="3"
                  className="w-full accent-blue-600" 
                />
              </div>
            </div>

            {/* Rewards Earned */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-gray-900 text-white rounded-3xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <p className="font-medium">Rewards Earned</p>
                  <Gift className="w-6 h-6 text-yellow-400" />
                </div>
                
                <div className="space-y-6">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">+50 XP</p>
                      <p className="text-sm text-gray-400">Session Completion</p>
                    </div>
                    <div className="text-emerald-400 text-sm">Level 4</div>
                  </div>
                  <div>
                    <p className="font-medium">3 Day Streak!</p>
                    <p className="text-sm text-gray-400">Consistency</p>
                  </div>
                  <div>
                    <p className="font-medium">"Zen Master" Badge</p>
                    <div className="h-2 bg-gray-700 rounded-full mt-2">
                      <div className="h-2 bg-purple-500 rounded-full w-4/5"></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">4/5 Sessions</p>
                  </div>
                </div>
              </div>

              {/* Suggested Next Step */}
              <div className="bg-emerald-600 text-white rounded-3xl p-8">
                <p className="font-medium mb-3">Suggested Next Step</p>
                <h3 className="text-xl font-semibold mb-4">Start your 10min Guided Routine</h3>
                <p className="text-sm opacity-90 mb-6">
                  You saved the "5-4-3-2-1 Grounding Exercise" to your plan. Now is a great time to do it.
                </p>
                <button className="bg-white text-emerald-600 px-6 py-3 rounded-2xl font-semibold w-full hover:bg-gray-100 transition">
                  Start Routine →
                </button>
              </div>
            </div>

            {/* Session Reflection */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-8">
              <h3 className="font-semibold text-lg mb-6">Session Reflection</h3>
              <p className="text-gray-600 mb-6">Was this session helpful in reducing your immediate intensity?</p>
              
              <div className="flex gap-4">
                <button className="flex-1 py-4 border-2 border-blue-600 text-blue-600 rounded-2xl font-medium">👍 Yes, it helped</button>
                <button className="flex-1 py-4 border border-gray-300 rounded-2xl hover:bg-gray-50">👎 Not really</button>
              </div>

              <div className="mt-10">
                <p className="font-medium mb-3">Optional Notes (Private Journal)</p>
                <textarea 
                  placeholder="Jot down any specific thoughts, what worked, or what didn't..." 
                  className="w-full h-32 border border-gray-200 rounded-3xl p-5 focus:outline-none focus:border-blue-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}