import DashboardCharts from '@/components/admin_office/DashboardCharts'
import LargeCards from '@/components/admin_office/LargeCards'
import SmallCards from '@/components/admin_office/SmallCards'
import CustomDataTable from '@/components/admin_office/CustomDataTable'
import React from 'react'
import Heading from '@/components/admin_office/Heading'

export default function page() {
  return (
    <div>
      <Heading title= "Dashboard Overview" />
       {/* Large Cards */}
       <LargeCards/>
       {/* Small cards */}
       <SmallCards/>
       {/* Charts */}
       <DashboardCharts/>
       {/* Recent order Table */}
       <CustomDataTable/>
    </div>
  )
}
