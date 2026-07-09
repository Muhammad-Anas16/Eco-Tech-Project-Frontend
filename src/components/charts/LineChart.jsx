"use client";

import {
  CartesianGrid,
  Line,
  LineChart as RechartsLineChart,
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
    time: "00:00",
    trend: 20,
  },
  {
    time: "04:00",
    trend: 38,
  },
  {
    time: "08:00",
    trend: 55,
  },
  {
    time: "12:00",
    trend: 42,
  },
  {
    time: "16:00",
    trend: 30,
  },
  {
    time: "20:00",
    trend: 78,
  },
  {
    time: "24:00",
    trend: 68,
  },
];

/* -------------------------------------------------------------------------- */
/*                               Chart Config                                 */
/* -------------------------------------------------------------------------- */

const defaultConfig = {
  trend: {
    label: "Trend",
    color: "#4ade80",
  },
};

const LineChart = ({
  data = dummyData,
  config = defaultConfig,

  xKey = "time",
  yKey = "trend",

  strokeWidth = 4,

  showGrid = true,
  showXAxis = true,
  showYAxis = true,

  curve = "monotone",
}) => {
  const color = config?.[yKey]?.color || "#4ade80";

  return (
    <div className="w-full h-full min-h-[300px]">
      <ChartContainer config={config} className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart
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
                strokeDasharray="5 5"
                vertical={false}
                stroke="#27272a"
              />
            )}

            {showXAxis && (
              <XAxis
                dataKey={xKey}
                tickLine={false}
                axisLine={false}
                tickMargin={12}
                stroke="#71717a"
              />
            )}

            {showYAxis && (
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={12}
                stroke="#71717a"
              />
            )}

            <Tooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />

            <Line
              type={curve}
              dataKey={yKey}
              stroke={color}
              strokeWidth={strokeWidth}
              dot={false}
              activeDot={{
                r: 7,
              }}
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};

export default LineChart;
