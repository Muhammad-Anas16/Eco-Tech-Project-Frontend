import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import LineChart from "@/components/charts/LineChart";
import BarChart from "@/components/charts/BarChart";
import DonutChart from "@/components/charts/DonutChart";

const DashboardCharts = () => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-12">
      {/* Line Chart */}
      <Card className="xl:col-span-8">
        <CardHeader>
          <CardTitle>Trend Overview</CardTitle>
        </CardHeader>

        <CardContent className="h-[350px]">
          <LineChart />
        </CardContent>
      </Card>

      {/* Donut */}
      <Card className="xl:col-span-4">
        <CardHeader>
          <CardTitle>System Status</CardTitle>
        </CardHeader>

        <CardContent className="h-[350px]">
          <DonutChart />
        </CardContent>
      </Card>

      {/* Bar */}
      <Card className="xl:col-span-12">
        <CardHeader>
          <CardTitle>Energy Consumption</CardTitle>
        </CardHeader>

        <CardContent className="h-[400px]">
          <BarChart />
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardCharts;
