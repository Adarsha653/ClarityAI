import React from 'react';
import { 
  Home, 
  Heart, 
  Clock, 
  Search, 
  Filter, 
  Play, 
  BookOpen, 
  Users 
} from 'lucide-react';

const ContentLibrary = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <h1 className="font-semibold text-xl text-gray-900">Clarity AI</h1>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <SidebarItem icon={<Home size={20} />} label="Dashboard" active={false} />
          <SidebarItem icon={<Heart size={20} />} label="Stress Session" active={false} />
          <SidebarItem icon={<Clock size={20} />} label="Progress & Recovery" active={false} />
          <SidebarItem 
            icon={<BookOpen size={20} />} 
            label="Content Library" 
            active={true} 
          />
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="text-xs font-medium text-gray-500 mb-2">SETTINGS</div>
          <SidebarItem icon={<Users size={20} />} label="Profile & Settings" active={false} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Navigation */}
        <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-4 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search breathing, journaling, burnout..."
                className="w-full pl-11 pr-4 py-3 bg-gray-100 border border-transparent focus:border-blue-500 rounded-2xl text-sm focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="font-medium text-sm">Noah Turner</div>
              <div className="text-xs text-gray-500">New York, NY</div>
            </div>
            <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
              NT
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-semibold text-gray-900">Content Library</h2>
            <p className="text-gray-600 max-w-md">
              Discover resources to manage burnout, gain career clarity, and build resilience.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 mb-8 flex-wrap">
            {['All', 'Breathing', 'Journaling', 'Career Clarity', 'Burnout Recovery'].map((cat, i) => (
              <button
                key={i}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  i === 0 
                    ? 'bg-blue-600 text-white shadow-sm' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
            <button className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-100 border border-gray-200 flex items-center gap-2">
              <Filter size={16} />
              Filters
            </button>
          </div>

          {/* For You Section */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900">For You</h3>
              <button className="text-blue-600 text-sm font-medium hover:underline flex items-center gap-1">
                View All
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 - Breathing */}
              <ContentCard
                image="https://picsum.photos/id/1015/600/340"
                duration="5 Min"
                category="BREATHING"
                intensity="Low Intensity"
                title="Box Breathing for Anxiety"
                description="A quick and effective technique to reset your nervous system before a stressful day."
                progress="22k"
              />

              {/* Card 2 - Journaling */}
              <ContentCard
                image="https://picsum.photos/id/201/600/340"
                duration="14 Min"
                category="JOURNALING"
                intensity="Medium Intensity"
                title="Career Alignment"
                description="Reflect on your core values and how they align with your current and future goals."
                progress="14k"
              />

              {/* Card 3 - Burnout Recovery (Mini-Course) - FIXED */}
              <ContentCard
                image="https://picsum.photos/id/870/600/340"
                category="BURNOUT RECOVERY"
                title="The Burnout Reset Protocol"
                description="A 7-day guided program to rebuild energy levels and establish healthy boundaries."
                isCourse={true}
                modules="7 Modules"
                durationText="9min"
                buttonText="Start"
              />
            </div>
          </div>

          {/* Saved & Recently Used */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Heart className="text-red-500" size={22} /> Saved
                </h3>
                <button className="text-blue-600 text-sm font-medium hover:underline">See All</button>
              </div>
              <SavedItem title="Morning Clarity Meditation" time="Breathing • 10 Min" />
              <SavedItem title="Imposter Syndrome Buster" time="Journaling • 15 Min" />
              <SavedItem title="Setting Boundaries 101" time="Mini-Course • Module 2" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Clock className="text-emerald-500" size={22} /> Recently Used
                </h3>
              </div>
              <RecentItem 
                title="4-7-8 Sleep Breathing" 
                status="Completed Yesterday" 
                icon="🌙" 
              />
              <RecentItem 
                title="Deep Work Prep" 
                status="50% Completed • 2 days ago" 
                icon="⚡" 
              />
            </div>
          </div>

          {/* Browse by Goal */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6">Browse by Goal</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <GoalCard title="Restore Energy" color="bg-emerald-100 text-emerald-700" icon="⚡" />
              <GoalCard title="Find Focus" color="bg-blue-100 text-blue-700" icon="🎯" />
              <GoalCard title="Career Direction" color="bg-purple-100 text-purple-700" icon="📈" />
              <GoalCard title="Build Resilience" color="bg-orange-100 text-orange-700" icon="🛡️" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Components
const SidebarItem = ({ icon, label, active }) => (
  <div className={`flex items-center gap-3 px-4 py-3 rounded-2xl cursor-pointer transition-all ${
    active 
      ? 'bg-blue-50 text-blue-700 font-medium' 
      : 'hover:bg-gray-100 text-gray-700'
  }`}>
    {icon}
    <span className="text-sm">{label}</span>
  </div>
);

const ContentCard = ({ 
  image, 
  duration, 
  category, 
  intensity, 
  title, 
  description, 
  progress, 
  isCourse = false, 
  modules, 
  durationText, 
  buttonText = "Continue" 
}) => (
  <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all group">
    <div className="relative">
      <img 
        src={image} 
        alt={title}
        className="w-full h-52 object-cover"
      />
      {duration && (
        <div className="absolute top-4 left-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full font-medium">
          {duration}
        </div>
      )}
      {isCourse && (
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-xs px-3 py-1 rounded-full font-medium shadow">
          Mini-Course
        </div>
      )}
    </div>

    <div className="p-6">
      <div className="flex items-center gap-2 text-xs mb-3">
        <span className="font-semibold text-blue-600 tracking-wider">{category}</span>
        {intensity && (
          <>
            <span className="text-gray-400">•</span>
            <span className="text-gray-500">{intensity}</span>
          </>
        )}
      </div>

      <h4 className="font-semibold text-lg leading-tight mb-2 line-clamp-2">{title}</h4>
      <p className="text-gray-600 text-sm line-clamp-3 mb-6">{description}</p>

      {isCourse ? (
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>{modules}</span>
            <span className="font-medium">{durationText}</span>
          </div>
          <button className="w-full bg-black hover:bg-gray-900 text-white py-3.5 rounded-2xl font-medium transition-colors">
            {buttonText}
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-500 flex items-center gap-1">
            👥 {progress}
          </div>
          <button className="text-blue-600 flex items-center gap-1.5 text-sm font-medium hover:text-blue-700 transition-colors">
            Continue 
            <Play size={16} fill="currentColor" />
          </button>
        </div>
      )}
    </div>
  </div>
);

const SavedItem = ({ title, time }) => (
  <div className="flex items-center justify-between bg-white p-4 rounded-2xl mb-3 border border-gray-100 hover:border-gray-200 transition-all group">
    <div>
      <div className="font-medium text-sm">{title}</div>
      <div className="text-xs text-gray-500">{time}</div>
    </div>
    <Heart className="text-red-400 group-hover:text-red-500 transition-colors" size={20} />
  </div>
);

const RecentItem = ({ title, status, icon }) => (
  <div className="flex items-center gap-4 bg-white p-4 rounded-2xl mb-3 border border-gray-100 hover:border-gray-200 transition-all">
    <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl shrink-0">
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <div className="font-medium text-sm truncate">{title}</div>
      <div className="text-xs text-emerald-600">{status}</div>
    </div>
    <Play size={20} className="text-emerald-500 shrink-0" />
  </div>
);

const GoalCard = ({ title, color, icon }) => (
  <div className={`${color} p-6 rounded-3xl hover:scale-105 active:scale-95 transition-transform cursor-pointer`}>
    <div className="text-3xl mb-4">{icon}</div>
    <div className="font-semibold text-lg">{title}</div>
  </div>
);

export default ContentLibrary;