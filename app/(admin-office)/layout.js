// import Navbar from '@/components/admin_office/Navbar';
// import Sidebar from '@/components/admin_office/Sidebar';
// import React from 'react';

// export default function Layout({ children }) {
//   return (
//     <div className='flex'>
//       {/* sidebar */}
//       <Sidebar />
//       <div className='w-full'>
//         {/* Header */}
//         <Navbar />
//         {/* main */}
//         <main className='min-h-screen p-8 mt-16 ml-60 bg-slate-900 text-slate-50'>
//           {children}
//         </main>
//       </div>
//       {/* main body */}
//     </div>
//   );
// }


import Navbar from '@/components/admin_office/Navbar';
import Sidebar from '@/components/admin_office/Sidebar';
import React from 'react';

export default function Layout({ children }) {
  return (
    <div>
      {/* Fixed Sidebar */}
      <div className="fixed top-0 left-0 z-50 h-full w-60">
        <Sidebar />
      </div>

      {/* Main content area with left padding to avoid overlap */}
      <div className="pl-60">
        <Navbar />
        <main className="min-h-screen p-8 mt-16 bg-slate-100 text-slate-50 dark:bg-slate-900">
          {children}
        </main>
      </div>
    </div>
  );
}
