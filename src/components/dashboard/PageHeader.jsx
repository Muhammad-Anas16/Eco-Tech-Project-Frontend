import { CalendarDays } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PageHeader = ({
  range,
  setRange,
  title = "System Overview",
  description = "Real-time metrics and infrastructure health.",
}) => {
  return (
    <div className="mb-8 flex flex-col gap-6 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm lg:flex-row lg:items-center lg:justify-between">
      {/* Left */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          {title}
        </h1>

        <p className="max-w-2xl text-sm text-zinc-400 md:text-base">
          {description}
        </p>
      </div>

      {/* Right */}
      <div className="flex w-full justify-start lg:w-auto lg:justify-end">
        <Select value={range} onValueChange={setRange}>
          <SelectTrigger className="h-12 w-full gap-2 rounded-lg border border-zinc-700 bg-zinc-800 px-4 text-white shadow-sm transition-all hover:border-emerald-500 hover:bg-zinc-700 focus:ring-2 focus:ring-emerald-500 sm:w-60">
            <CalendarDays className="h-4 w-4 text-emerald-400" />
            <SelectValue placeholder="Select Time Range" />
          </SelectTrigger>

          <SelectContent className="rounded-lg border border-zinc-700 bg-zinc-900 text-white">
            <SelectItem value="1h">Last Hour</SelectItem>
            <SelectItem value="24h">Last 24 Hours</SelectItem>
            <SelectItem value="7d">Last 7 Days</SelectItem>
            <SelectItem value="30d">Last 30 Days</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default PageHeader;
