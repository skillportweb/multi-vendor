import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { ExternalLink, LayoutGrid, Slack, Truck, User, User2, Users, UserSquare2, Warehouse } from "lucide-react";



export default function Sidebar() {

  const sidebarLinks = [
    {
      title:"Customers",
      icon: User2,
      href: "/dashboard/customers"
    },
    {
      title:"Markets",
      icon: Warehouse,
      href: "/dashboard/markets"
    },
    {
      title:"Farmers",
      icon: UserSquare2,
      href: "/dashboard/farmers"
    },
    {
      title:"Orders",
      icon: Truck,
      href: "/dashboard/orders"
    },
    {
      title:"Our Staff",
      icon: User2,
      href: "/dashboard/staff"
    },
    {
      title:"Customers",
      icon: User,
      href: "/dashboard/customers"
    },
    {
      title:"Settings",
      icon: LayoutGrid,
      href: "/dashboard/settings"
    },
    {
      title:"Online Store",
      icon: ExternalLink,
      href: "/dashboard/customers"
    },
  ]

  return (
    <div
      className="dark:bg-slate-700 bg-white shadow-md space-y-6 
    w-60 h-screen dark:text-slate-50 
     fixed left-0 top-0  text-slate-800"
    >
      <Link className="px-6 py-4" href="#">
        <Image src={logo} alt="limifood logo" className="w-32" />
      </Link>
      <div className="space-y-3 flex flex-col mt-14">
        {/* <Link
          href="#"
          className="flex items-center space-x-3 px-4 py-2 border-l-4 border-green-600"
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 px-4 py-2 border-l-4 border-green-600"
        >
          <Slack/>
          <span>Catelogue</span>
        </Link>

        <Link
          href="#"
          className="flex items-center space-x-3 px-4 py-2 border-l-4 border-green-600"
        >
          <Users/>
          <span>Customers</span>
        </Link>

        <Link
          href="#"
          className="flex items-center space-x-3 px-4 py-2 border-l-4 border-green-600"
        >
          <Warehouse/>
          <span>Markets</span>
        </Link>

        <Link
          href="#"
          className="flex items-center space-x-3 px-4 py-2 border-l-4 border-green-600"
        >
          <UserSquare2 />
          <span>Farmers</span>
        </Link>
        
        <Link
          href="#"
          className="flex items-center space-x-3 px-4 py-2 border-l-4 border-green-600"
        >
          <Truck />
          <span>Orders</span>
        </Link>

        <Link
          href="#"
          className="flex items-center space-x-3 px-4 py-2 border-l-4 border-green-600"
        >
          <User2 />
          <span>Our Staff</span>
        </Link>
        
        <Link
          href="#"
          className="flex items-center space-x-3 px-4 py-2 border-l-4 border-green-600"
        >
          <LayoutGrid />
          <span>Settings</span>
        </Link>

        <Link
          href="#"
          className="flex items-center space-x-3 px-4 py-2 border-l-4 border-green-600"
        >
          <ExternalLink />
          <span>Online Store</span>
        </Link> */}

        {
          sidebarLinks.map((item,i) =>{
            const Icon = item.icon
            return(
              <Link key={i}
          href={item.href}
          className="flex items-center space-x-3 px-4 py-2 border-l-4 border-green-600"
        >
          <Icon />
          <span>{item.title}</span>
        </Link>
            )
          })
        }
        
      </div>
    </div>
  );
}
