"use client";

import { Pie, PieChart, ResponsiveContainer, Label } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

/* -------------------------------------------------------------------------- */
/*                                  Dummy Data                                */
/* -------------------------------------------------------------------------- */

const dummyData = [
  {
    name: "Online",
    value: 820,
    fill: "#22c55e",
  },
  {
    name: "Offline",
    value: 340,
    fill: "#3b82f6",
  },
  {
    name: "Maintenance",
    value: 120,
    fill: "#f59e0b",
  },
];

/* -------------------------------------------------------------------------- */

const chartConfig = {
  Online: {
    label: "Online",
    color: "#22c55e",
  },
  Offline: {
    label: "Offline",
    color: "#3b82f6",
  },
  Maintenance: {
    label: "Maintenance",
    color: "#f59e0b",
  },
};

const DonutChart = ({
  data = dummyData,
  config = chartConfig,
  dataKey = "value",
  nameKey = "name",
  innerRadius = 70,
  outerRadius = 100,
  label = "Devices",
}) => {
  const total = data.reduce((sum, item) => sum + item[dataKey], 0);

  return (
    <div className="h-full w-full min-h-[320px]">
      <ChartContainer config={config} className="h-full w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />

            <Pie
              data={data}
              dataKey={dataKey}
              nameKey={nameKey}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-white text-3xl font-bold"
                        >
                          {total}
                        </tspan>

                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy + 25}
                          className="fill-gray-400 text-sm"
                        >
                          {label}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};

export default DonutChart;
