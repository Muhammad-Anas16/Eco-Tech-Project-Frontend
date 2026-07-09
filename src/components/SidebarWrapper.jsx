import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ChevronRight } from "lucide-react";

const SidebarWrapper = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        {/* Navbar */}
        <header className="flex h-14 items-center justify-between border-b bg-[#171717] px-4">
          <div className="flex items-center gap-3">
            <SidebarTrigger className="text-white" />

            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide">
              <span className="text-emerald-400">BMS Enterprise</span>

              <ChevronRight className="h-4 w-4 text-zinc-500" />

              {/* <span className="text-zinc-200">Dashboard</span> */}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default SidebarWrapper;
