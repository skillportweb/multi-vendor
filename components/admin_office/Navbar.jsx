import { AlignJustify, Bell, Sun, User } from "lucide-react";
import React from "react";

export default function Navbar() {
  return (
    <div
      className="flex items-center justify-between bg-slate-800
     text-slate-50 h-20 py-4 fixed top-0 left-60 right-0 px-8 z-50"
    >
      {/* icon */}
      <button>
        <AlignJustify />
      </button>
      <div className="flex space-x-3 text-green-600">
        <button>
          <Sun />
        </button>

        <button
          type="button"
          className="relative inline-flex items-center p-3 text-sm
           font-medium text-center text-white bg-transparent rounded-lg
            "
        >
          <Bell  className="text-green-600"/>
          <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center justify-center
           w-5 h-5 text-[9px] font-bold text-white bg-red-500 
            rounded-full -top-0 end-6 dark:border-gray-900">
            20
          </div>
        </button>
       
        <button>
          <img className="w-8 h-8 rounded-full object-cover" width={200} height={200} src="./profile.webp" alt="User Profile" />
        </button>
      </div>
    </div>
  );
}
