// "use client";
// import { ThemeProvider } from "next-themes";
// export default function Providers({ children }) {
//   return <ThemeProvider attribute="class">{children}</ThemeProvider>;
// }

import React from 'react'
import { ThemeProvider } from "next-themes";

export default function providers({children}) {
  return (
    <ThemeProvider  attribute="class"
    defaultTheme="dark">
        {children}
    </ThemeProvider>
  )
}
