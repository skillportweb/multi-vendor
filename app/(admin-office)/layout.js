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
//         <main className='ml-60 p-8 bg-slate-900 text-slate-50 min-h-screen mt-16'>
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
      <div className="fixed top-0 left-0 h-full w-60 z-50">
        <Sidebar />
      </div>

      {/* Main content area with left padding to avoid overlap */}
      <div className="pl-60">
        <Navbar />
        <main className="p-8 bg-slate-900 text-slate-50 min-h-screen mt-16">
          {children}
        </main>
      </div>
    </div>
  );
}
