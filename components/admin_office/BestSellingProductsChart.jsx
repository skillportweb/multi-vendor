"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BestSellingProductsChart() {
  const data = {
    labels: ["Cabbage", "Watermelon", "Broccoli", "maize"],
    datasets: [
      {
        label: "# of Votes",
        data: [50, 10, 20, 20],
        backgroundColor: [
          "rgba(0,0,255,0.7)",
          "rgba(255,0,221,0.7)",
          "rgba(2,139,71,0.7)",
          "rgba(0, 0, 0, 0.7)",
        ],
        borderColor: [
          "rgba(0,0,255,0.9)",
          "rgba(255,0,221,0.3)",
          "rgba(2,139,71,0.7)",
          "rgba(0, 0, 0, 0.7)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="bg-slate-700 p-8 rounded-lg">
      <h2 className=" text-xl font-bold mb-4">Best Selling Charts</h2>
      {/* Chart */}
      <div className="p-4">
        <Pie className="w-32 h-32" data={data} />
      </div>
    </div>
  );
}
