"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";
import {
  Boxes,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  LayoutGrid,
  LayoutList,
  LogOut,
  Monitor,
  MonitorPlay,
  ScanSearch,
  SendToBack,
  Settings,
  Slack,
  Truck,
  User2,
  Users,
  UserSquare2,
  Warehouse,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const sidebarLinks = [
    {
      title: "Customers",
      icon: Users,
      href: "/dashboard/customers",
    },
    {
      title: "Markets",
      icon: Warehouse,
      href: "/dashboard/markets",
    },
    {
      title: "Farmers",
      icon: UserSquare2,
      href: "/dashboard/farmers",
    },
    {
      title: "Orders",
      icon: Truck,
      href: "/dashboard/orders",
    },
    {
      title: "Our Staff",
      icon: User2,
      href: "/dashboard/staff",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
    },
    {
      title: "Online Store",
      icon: ExternalLink,
      href: "/dashboard/store",
    },
  ];

  const catalogueLinks = [
    {
      title: "Products",
      icon: Boxes,
      href: "/dashboard/products",
    },
    {
      title: "Categories",
      icon: LayoutList,
      href: "/dashboard/categories",
    },
    {
      title: "Attributes",
      icon: SendToBack,
      href: "/dashboard/attributes",
    },
    {
      title: "Coupons",
      icon: ScanSearch,
      href: "/dashboard/coupons",
    },
    {
      title: "store Sliders",
      icon: MonitorPlay,
      href: "/dashboard/sliders",
    },
  ];

  const [openManu, setOpenManu] = useState(false)

  return (
    <div className="fixed top-0 left-0 w-64 h-screen space-y-6 bg-white shadow-md dark:bg-slate-700 dark:text-slate-50 text-slate-800">
      <Link className="px-6 py-4" href="#">
        <Image src={logo} alt="limifood logo" className="w-32" />
      </Link>
      <div className="flex flex-col space-y-3 mt-14">
        <Link
          href="/dashboard"
          className={`flex items-center px-4 py-2 space-x-3 border-l-4 ${
            pathname === "/dashboard"
              ? "border-lime-500 text-lime-500"
              : "border-transparent text-slate-700 dark:text-slate-200 hover:text-green-600"
          }`}
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>

        <Collapsible className="px-4 py-2">
          <CollapsibleTrigger asChild onClick={()=> setOpenManu(!openManu)}>
            <button className="flex items-center space-x-6 py-2 cursor-pointer">
              <div className="flex items-center space-x-3">
                <Slack />
                <span>Catalogue</span>
              </div>
              {openManu?<ChevronRight />:<ChevronDown/>}
            </button>
          </CollapsibleTrigger>

          <CollapsibleContent className="px-3 pl-6 bg-slate-800 rounded-lg py-3">
            {catalogueLinks.map((item, i) => {
              const Icon = item.icon
              return (
                <Link
                  key={i}
                  href={item.href}
                  className={`flex items-center py-1 space-x-3  text-sm ${
                    pathname === item.href
                      ? "border-lime-500 text-lime-500"
                      : "border-transparent text-slate-700 dark:text-slate-200 hover:text-green-600"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </CollapsibleContent>
        </Collapsible>

        {sidebarLinks.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              key={i}
              href={item.href}
              className={`flex items-center px-4 py-2 space-x-3 border-l-4 ${
                item.href === pathname
                  ? "border-lime-500 text-lime-500"
                  : "border-transparent text-slate-700 dark:text-slate-200 hover:text-green-600"
              }`}
            >
              <Icon />
              <span>{item.title}</span>
            </Link>
          );
        })}
        <div className="px-6 py-2">
          <button className="flex items-center px-6 py-3 space-x-3 rounded-md bg-lime-600">
            <LogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
