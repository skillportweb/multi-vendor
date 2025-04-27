import {
  AlignJustify,
  Bell,
  LayoutDashboardIcon,
  LogOut,
  Settings,
  Sun,
  User,
  X,
} from "lucide-react";
import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeSwitcherBtn from "./ThemeSwitcherBtn";

export default function Navbar() {
  return (
    <div className="fixed top-0 right-0 z-50 flex items-center justify-between h-20 px-8 py-4 dark:bg-slate-800 bg-white text-slate-50 left-60 shadow-md">
      {/* icon */}
      <button className="text-lime-600 dark:text-lime-500">
        <AlignJustify />
      </button>

      <div className="flex items-center space-x-3">
        {/* Theme switch */}
        <ThemeSwitcherBtn />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent"
            >
              <Bell className="text-lime-600 dark:text-lime-500" />
              <span className="sr-only">Notifications</span>
              <div
                className="absolute inline-flex items-center justify-center
           w-5 h-5 text-[9px] font-bold text-white bg-red-500 
            rounded-full -top-0 end-6 dark:border-gray-900"
              >
                20
              </div>
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="px-4 py-2 pr-8">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <img
                  className="object-cover w-8 h-8 rounded-full cursor-pointer"
                  width={200}
                  height={200}
                  src="./profile.webp"
                  alt="User Profile"
                />

                <div className="flex flex-col space-y-1">
                  <p>Yellow Sweet Conr Stock out</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-3 py-0.5 text-white bg-red-700 rounded-full text-sm">
                      Stock out
                    </p>
                    <p>Dec 12 2021 - 12:40PM</p>
                  </div>
                </div>
                <button></button>
              </div>
              <DropdownMenuSeparator />
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <img
                  className="object-cover w-8 h-8 rounded-full cursor-pointer"
                  width={200}
                  height={200}
                  src="./profile.webp"
                  alt="User Profile"
                />

                <div className="flex flex-col space-y-1">
                  <p>Yellow Sweet Conr Stock out</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-3 py-0.5 text-white bg-red-700 rounded-full text-sm">
                      Stock out
                    </p>
                    <p>Dec 12 2021 - 12:40PM</p>
                  </div>
                </div>
                <button></button>
              </div>
              <DropdownMenuSeparator />
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <img
                  className="object-cover w-8 h-8 rounded-full cursor-pointer"
                  width={200}
                  height={200}
                  src="./profile.webp"
                  alt="User Profile"
                />

                <div className="flex flex-col space-y-1">
                  <p>Yellow Sweet Conr Stock out</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-3 py-0.5 text-white bg-red-700 rounded-full text-sm">
                      Stock out
                    </p>
                    <p>Dec 12 2021 - 12:40PM</p>
                  </div>
                </div>
                <button></button>
              </div>
              <DropdownMenuSeparator />
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <img
              className="object-cover w-8 h-8 rounded-full cursor-pointer"
              width={200}
              height={200}
              src="./profile.webp"
              alt="User Profile"
            />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="px-4 py-2 pr-8">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <button className="flex items-center space-x-1">
                <LayoutDashboardIcon className="w-4 h-4 mr-2" />
                <span>Dashboard</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="flex items-center space-x-1">
                <Settings className="w-4 h-4 mr-2" />
                <span>Edit Profile</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="flex items-center space-x-1">
                <LogOut className="w-4 h-4 mr-2" />
                <span>Logout</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
