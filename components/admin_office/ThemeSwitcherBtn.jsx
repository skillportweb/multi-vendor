"use client";
import { useState, useEffect } from "react";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
export default function ThemeSwitcherBtn() {
const [mounted, setMounted] = useState(false);
const { theme, setTheme } = useTheme();
console.log(theme)
useEffect(() => {
setMounted(true);
}, []);
if (!mounted) {
return null;
}
return (
<button
className="dark:text-lime-600 text-lime-600"
onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
>
{theme === "light" ? <Moon /> : <Sun/>}
</button>
);
}