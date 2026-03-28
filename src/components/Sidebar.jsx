import { Home, Zap, TrendingUp, BookOpen, User, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: Home },
    { path: '/session', label: 'Stress Session', icon: Zap },
    { path: '/progress', label: 'Progress & Recovery', icon: TrendingUp },
    { path: '/library', label: 'Content Library', icon: BookOpen },
  ];

  return (
    <div className="w-80 bg-white border-r border-gray-100 h-screen fixed flex flex-col overflow-hidden">
      
      {/* Logo Header */}
      <div className="px-8 py-8 flex items-center gap-3 border-b border-gray-100">
        <div className="w-11 h-11 bg-blue-600 rounded-2xl flex items-center justify-center shadow-md">
          <span className="text-white font-bold text-3xl">C</span>
        </div>
        <div className="font-semibold text-3xl tracking-tight text-gray-900">Clarity AI</div>
      </div>

      {/* Menu Section */}
      <div className="flex-1 px-6 py-8 overflow-y-auto">
        <div className="text-xs uppercase tracking-widest font-semibold text-gray-400 mb-6 px-4">MENU</div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-4 px-6 py-4 rounded-3xl text-[15px] transition-all font-medium ${
                  isActive 
                    ? 'bg-blue-50 text-blue-700 shadow-sm' 
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* SETTINGS */}
        <div className="mt-12">
          <div className="text-xs uppercase tracking-widest font-semibold text-gray-400 mb-6 px-4">SETTINGS</div>
          <Link
            to="/settings"
            className="flex items-center gap-4 px-6 py-4 rounded-3xl text-[15px] text-gray-700 hover:bg-gray-100 transition-all font-medium"
          >
            <Settings className="w-5 h-5" />
            Profile & Settings
          </Link>
        </div>

        {/* Session Progress Box - More Spacious */}
        <div className="mt-12 mx-2">
          <div className="bg-gray-900 text-white rounded-3xl p-7">
            <p className="font-semibold text-lg mb-6">Session Progress</p>
            
            <div className="space-y-5">
              {[
                { label: 'Calculator', completed: true },
                { label: 'Scenario', completed: true },
                { label: 'AI Chat', completed: true },
                { label: 'Plan', completed: true },
                { label: 'Feedback', completed: false },
              ].map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0
                    ${step.completed 
                      ? 'bg-emerald-500 text-white' 
                      : 'border-2 border-gray-600'}`}>
                    {step.completed ? '✓' : ''}
                  </div>
                  <span className={`text-sm ${step.completed ? 'text-gray-300' : 'text-gray-500'}`}>
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom User Info */}
      <div className="p-6 border-t border-gray-100 mt-auto">
        <div className="flex items-center gap-4 px-2">
          
          
        </div>
      </div>
    </div>
  );
}