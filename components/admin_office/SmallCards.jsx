import React from "react";
import SmallCard from "./SmallCard";
import { CheckCheck, RefreshCcw, ShoppingCart, Loader2} from "lucide-react";

export default function SmallCards() {
  const orderStatus = [
    {
      title: " Total Orders",
      numbers: 500,
      iconBg: "bg-green-600",
      icon: ShoppingCart,
    },
    {
        title: "Orders Pendnig",
        numbers: 100,
        iconBg: "bg-blue-600",
        icon: Loader2,
        
      },
      {
        title: "Order Processing",
        numbers: 200,
        iconBg: "bg-orange-600",
        icon: RefreshCcw,
      },
      {
        title: "Order Delivered",
        numbers: 300,
        iconBg: "bg-purple-600",
        icon: CheckCheck,
      },
  ];

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2
    lg:grid-cols-4 gap-4 py-8"
    >

     {
        orderStatus.map((data,i) => {
            return(
             <SmallCard data={data}/>
            )
        })
     }

    </div>
  );
}
