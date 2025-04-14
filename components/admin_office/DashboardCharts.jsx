import BestSellingProductsChart from "./BestSellingProductsChart";
import WeeklySalesChart from "./WeeklySalesChart";

export default function DashboardCharts() {
  return (
    <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
      <WeeklySalesChart/>
      <BestSellingProductsChart/>
    </div>
  );
}
