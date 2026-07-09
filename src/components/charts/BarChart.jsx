"use client";

import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

/* -------------------------------------------------------------------------- */
/*                                  Dummy Data                                */
/* -------------------------------------------------------------------------- */

const dummyData = [
  {
    month: "Jan",
    energy: 120,
  },
  {
    month: "Feb",
    energy: 185,
  },
  {
    month: "Mar",
    energy: 145,
  },
  {
    month: "Apr",
    energy: 260,
  },
  {
    month: "May",
    energy: 210,
  },
  {
    month: "Jun",
    energy: 300,
  },
  {
    month: "Jul",
    energy: 240,
  },
];

/* -------------------------------------------------------------------------- */
/*                               Default Config                               */
/* -------------------------------------------------------------------------- */

const defaultConfig = {
  energy: {
    label: "Energy",
    color: "#3b82f6",
  },
};

const BarChart = ({
  data = dummyData,
  config = defaultConfig,

  xKey = "month",
  yKey = "energy",

  radius = 8,

  showGrid = true,
  showXAxis = true,
  showYAxis = true,
}) => {
  const color = config?.[yKey]?.color || "#3b82f6";

  return (
    <div className="w-full h-full min-h-[300px]">
      <ChartContainer config={config} className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >
            {showGrid && (
              <CartesianGrid
                vertical={false}
                strokeDasharray="4 4"
                stroke="#27272a"
              />
            )}

            {showXAxis && (
              <XAxis
                dataKey={xKey}
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                stroke="#71717a"
              />
            )}

            {showYAxis && (
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                stroke="#71717a"
              />
            )}

            <Tooltip
              cursor={{ fill: "#18181b" }}
              content={<ChartTooltipContent />}
            />

            <Bar dataKey={yKey} fill={color} radius={[radius, radius, 0, 0]} />
          </RechartsBarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};

export default BarChart;
