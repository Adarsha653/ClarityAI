import { Search, Bell, Mail } from 'lucide-react';

export default function Topnav() {
  return (
    <div className="h-16 bg-white border-b border-gray-200 px-8 flex items-center justify-between fixed right-0 left-72 z-50">
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search your resources..." 
            className="w-full bg-gray-100 border border-gray-200 pl-11 py-3 rounded-2xl focus:outline-none focus:border-blue-400 text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <Mail className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
        <Bell className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
        
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="font-medium text-sm">Alex Rivera</p>
            <p className="text-xs text-gray-500">Student</p>
          </div>
          <div className="w-9 h-9 bg-linear-to-br from-purple-500 to-pink-500 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
}