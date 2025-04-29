import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg"
import { LayoutGrid } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="dark:bg-slate-700 bg-white shadow-md space-y-6 
    w-60 h-screen dark:text-slate-50 px-6 py-4
     fixed left-0 top-0  text-slate-800">
      <Link className="" href="#">
        <Image src={logo} alt="limifood logo" className="w-32"/>
        </Link>
        <div className="space-y-3 flex flex-col mt-14">
      <Link href="#" className="flex items-center space-x-3 py-2">
      <LayoutGrid/><span>Dashboard</span>
      </Link>
      <Link href="#">Catelogue</Link>
      <Link href="#">Customers</Link>
      <Link href="#">Markets</Link>
      <Link href="#">Orders</Link>
      <Link href="#">Staff</Link>
      <Link href="#">Settings</Link>
      <Link href="#">Online Store</Link>
      </div>
    </div>
  );
}
