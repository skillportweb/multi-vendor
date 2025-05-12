"use client";
import Navbar from '@/components/admin_office/Navbar';
import Sidebar from '@/components/admin_office/Sidebar';
import React, { useState } from 'react';

export default function Layout({ children }) {
  const [showSidebar , setShowSidebar] = useState(false)
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-50">
      {/* Sidebar - hidden on small screens */}
      <div className="fixed top-0 left-0 z-50 hidden h-full w-60 md:block">
        <Sidebar showSidebar={showSidebar}/>
      </div>

      {/* Main content wrapper with left padding */}
      <div className="md:pl-60">
        {/* Fixed Navbar */}
        <div className="fixed top-0 left-0 right-0 z-40 md:left-60">
          <Navbar setshowSidebar = {setShowSidebar} />
        </div>

        {/* Main content area */}
        <main className="px-4 pt-16 sm:px-6 lg:px-8 mt-12">
          {children}
        </main>
      </div>
    </div>
  );
}
