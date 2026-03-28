import React, { useState } from 'react';
import { 
  Home, 
  Zap, 
  TrendingUp, 
  BookOpen, 
  User, 
  Mail, 
  Phone, 
  HelpCircle 
} from 'lucide-react';

const AccountSettings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  // States
  const [voiceMode, setVoiceMode] = useState(true);
  const [dailyCheckIn, setDailyCheckIn] = useState(true);
  const [stressReminders, setStressReminders] = useState(true);
  const [weeklySummary, setWeeklySummary] = useState(true);
  const [marketing, setMarketing] = useState(false);

  const [dataSharing, setDataSharing] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [sessionRecording, setSessionRecording] = useState(false);
  const [aiTraining, setAiTraining] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-screen overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-600 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">C</span>
            </div>
            <h1 className="font-semibold text-2xl tracking-tight text-gray-900">Clarity AI</h1>
          </div>
        </div>

        <div className="flex-1 px-4 py-8 overflow-y-auto">
          <div className="text-xs uppercase tracking-widest font-semibold text-gray-500 mb-6 px-4">MENU</div>
          <nav className="space-y-1">
            <SidebarItem icon={<Home size={20} />} label="Dashboard" />
            <SidebarItem icon={<Zap size={20} />} label="Stress Session" />
            <SidebarItem icon={<TrendingUp size={20} />} label="Progress & Recovery" />
            <SidebarItem icon={<BookOpen size={20} />} label="Content Library" />
          </nav>

          <div className="mt-10">
            <div className="text-xs uppercase tracking-widest font-semibold text-gray-500 mb-6 px-4">SETTINGS</div>
            <SidebarItem icon={<User size={20} />} label="Profile & Settings" active={true} />
          </div>
        </div>

        <div className="border-t border-gray-100 p-5 mt-auto">
          <div className="flex items-center gap-3 px-2 py-2 rounded-2xl hover:bg-gray-50 cursor-pointer">
            <div className="w-9 h-9 bg-linear-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-semibold text-sm">
              NT
            </div>
            <div>
              <div className="font-medium text-sm">Noah Turner</div>
              <div className="text-xs text-gray-500">New York, NY</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-semibold text-gray-900 mb-1">Account Settings</h1>
          <p className="text-gray-600 mb-10">Manage your profile, preferences, and data privacy.</p>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-10 overflow-x-auto pb-1">
            <TabButton label="Profile & Personalization" active={activeTab === 'profile'} onClick={() => setActiveTab('profile')} />
            <TabButton label="Notifications & Voice" active={activeTab === 'notifications'} onClick={() => setActiveTab('notifications')} />
            <TabButton label="Privacy & Data" active={activeTab === 'privacy'} onClick={() => setActiveTab('privacy')} />
            <TabButton label="Help & Support" active={activeTab === 'help'} onClick={() => setActiveTab('help')} />
          </div>

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="space-y-12">
              <div>
                <h3 className="font-semibold text-lg mb-4">Profile Picture</h3>
                <div className="flex items-center gap-8">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                    <img src="https://picsum.photos/id/64/300/300" alt="Profile" className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-3">
                      Click to replace or drag and drop<br />
                      PNG, JPG, GIF (max 5MB)
                    </p>
                    <button className="text-red-600 text-sm font-medium hover:underline">Remove picture</button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-6">Personal Details</h3>
                <div className="grid grid-cols-2 gap-x-8 gap-y-8">
                  <InputField label="First Name" value="Noah" />
                  <InputField label="Last Name" value="Turner" />
                  <InputField label="Email Address" value="noah.turner@clarityai.com" className="col-span-2" />
                  <InputField label="Current Role / Career Stage" value="Mid-Level Professional" className="col-span-2" />
                </div>
              </div>
            </div>
          )}

          {/* Notifications & Voice Tab */}
          {activeTab === 'notifications' && (
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-7 border border-gray-100">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium text-lg">Enable Voice Mode</div>
                    <p className="text-gray-600 text-sm mt-1">Allow voice input and spoken responses during Stress Sessions</p>
                  </div>
                  <Toggle checked={voiceMode} onChange={setVoiceMode} />
                </div>
              </div>

              <h3 className="font-semibold text-lg mt-6 mb-4">Notification Preferences</h3>

              <NotificationItem 
                title="Daily Check-in" 
                desc="Gentle reminder to track your mood and stress levels" 
                time="06:00 PM"
                checked={dailyCheckIn}
                onChange={setDailyCheckIn}
              />

              <NotificationItem 
                title="Stress Reminders" 
                desc="We'll remind you before potentially stressful events"
                checked={stressReminders}
                onChange={setStressReminders}
              />

              <NotificationItem 
                title="Weekly Progress Summary" 
                desc="Receive a summary of your progress every Sunday"
                checked={weeklySummary}
                onChange={setWeeklySummary}
              />

              <NotificationItem 
                title="Marketing & Product Updates" 
                desc="News about new features, content, and improvements"
                checked={marketing}
                onChange={setMarketing}
              />
            </div>
          )}

          {/* Privacy & Data Tab */}
          {activeTab === 'privacy' && (
            <div className="space-y-10">
              <div>
                <h3 className="font-semibold text-lg mb-2">Data & Privacy Controls</h3>
                <p className="text-gray-600">Choose how your information is used and stored.</p>
              </div>

              <div className="bg-white rounded-3xl p-8 space-y-8 border border-gray-100">
                <ToggleItem title="Anonymized Data Sharing" desc="Help improve the AI by sharing anonymized usage data" checked={dataSharing} onChange={setDataSharing} />
                <ToggleItem title="Personalized Analytics" desc="Allow AI to learn from your sessions for better recommendations" checked={analytics} onChange={setAnalytics} />
                <ToggleItem title="Save Voice Recordings" desc="Store audio from voice sessions for later review" checked={sessionRecording} onChange={setSessionRecording} />
                <ToggleItem title="Use Data for AI Training" desc="Allow your data to help train future AI models (anonymized)" checked={aiTraining} onChange={setAiTraining} />
              </div>

              <div className="bg-white rounded-3xl p-8 border border-gray-100">
                <h4 className="font-semibold mb-5">Data Management</h4>
                <div className="space-y-3">
                  <ActionButton text="Download a copy of all my data" type="blue" />
                  <ActionButton text="Delete all my data and account" type="red" danger />
                </div>
              </div>

              <p className="text-center text-xs text-gray-500">
                All your data is encrypted in transit and at rest • Last updated: March 29, 2026
              </p>
            </div>
          )}

          {/* Help & Support Tab */}
          {activeTab === 'help' && (
            <div className="bg-white rounded-3xl p-12 text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <HelpCircle size={32} className="text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold mb-3">How can we help you today?</h2>
              <p className="text-gray-600 max-w-md mx-auto mb-10">
                Our support team is ready to assist you with any questions about your account, features, or sessions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <SupportCard icon={<Mail size={24} />} title="Email Support" desc="Get a response within 24 hours" />
                <SupportCard icon={<Phone size={24} />} title="Schedule a Call" desc="Book a 15-minute support call" />
              </div>

              <button className="mt-10 bg-blue-600 hover:bg-blue-700 text-white px-10 py-3.5 rounded-2xl font-medium transition-colors">
                Contact Support Now
              </button>

              <p className="text-xs text-gray-500 mt-12">FAQs • Community Forum • Video Tutorials</p>
            </div>
          )}

          {/* Save Button */}
          <div className="flex justify-end mt-16">
            <button className="px-10 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-2xl transition-all">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ====================== Reusable Components ======================

const SidebarItem = ({ icon, label, active = false }) => (
  <div className={`flex items-center gap-3.5 px-5 py-3.5 rounded-2xl text-[15px] font-medium transition-all ${
    active ? 'bg-blue-50 text-blue-700 shadow-sm' : 'text-gray-700 hover:bg-gray-100'
  }`}>
    {icon}
    {label}
  </div>
);

const TabButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-7 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-all ${
      active ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-900'
    }`}
  >
    {label}
  </button>
);

const InputField = ({ label, value, className = '' }) => (
  <div className={className}>
    <label className="block text-sm text-gray-500 mb-1.5">{label}</label>
    <input 
      type="text" 
      value={value} 
      readOnly
      className="w-full px-5 py-3.5 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500 text-sm"
    />
  </div>
);

const Toggle = ({ checked, onChange }) => (
  <label className="relative inline-flex items-center cursor-pointer">
    <input 
      type="checkbox" 
      checked={checked} 
      onChange={() => onChange(!checked)}
      className="sr-only peer" 
    />
    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 transition-colors"></div>
    <div className={`absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${checked ? 'translate-x-5' : ''}`}></div>
  </label>
);

const ToggleItem = ({ title, desc, checked, onChange }) => (
  <div className="flex items-center justify-between py-3">
    <div>
      <div className="font-medium">{title}</div>
      <div className="text-sm text-gray-500">{desc}</div>
    </div>
    <Toggle checked={checked} onChange={onChange} />
  </div>
);

const NotificationItem = ({ title, desc, time, checked, onChange }) => (
  <div className="bg-white p-6 rounded-3xl border border-gray-100 flex justify-between">
    <div className="flex-1 pr-6">
      <div className="font-medium">{title}</div>
      <div className="text-sm text-gray-600">{desc}</div>
      {time && <div className="text-xs text-gray-500 mt-1.5">{time}</div>}
    </div>
    <Toggle checked={checked} onChange={onChange} />
  </div>
);

// Fixed ActionButton - color is now properly used
const ActionButton = ({ text, type = 'blue', danger = false }) => {
  const baseClasses = "w-full text-left px-6 py-4 rounded-2xl border transition-all hover:shadow-sm flex justify-between items-center";
  
  const styles = danger 
    ? "border-red-200 text-red-600 hover:bg-red-50" 
    : type === 'blue' 
      ? "border-blue-200 text-blue-600 hover:bg-blue-50" 
      : "border-gray-200 text-gray-700 hover:bg-gray-50";

  return (
    <button className={`${baseClasses} ${styles}`}>
      <span>{text}</span>
      <span className="text-xl">→</span>
    </button>
  );
};

const SupportCard = ({ icon, title, desc }) => (
  <div className="border border-gray-200 rounded-3xl p-6 hover:border-blue-300 transition-all cursor-pointer">
    <div className="text-blue-600 mb-4">{icon}</div>
    <div className="font-semibold mb-1">{title}</div>
    <div className="text-sm text-gray-600">{desc}</div>
  </div>
);

export default AccountSettings;