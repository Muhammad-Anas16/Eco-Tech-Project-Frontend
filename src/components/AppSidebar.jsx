import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import {
  LayoutDashboard,
  TrendingUp,
  Zap,
  FileText,
  Users,
  User,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    url: "/",
  },
  {
    title: "Trend",
    icon: TrendingUp,
    url: "/trend",
  },
  {
    title: "Trend Log",
    icon: FileText,
    url: "/trend-log",
  },
  {
    title: "Energy",
    icon: Zap,
    url: "/energy",
  },
  {
    title: "Energy Log",
    icon: FileText,
    url: "/energy-log",
  },
  {
    title: "Users",
    icon: User,
    url: "/users",
  },
  {
    title: "Groups",
    icon: Users,
    url: "/groups",
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-5 bg-[]">
        <h2 className="text-xl font-bold text-emerald-400">BMS Dashboard</h2>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="text-black font-medium w-full flex items-center gap-2 text-xl">
                      <item.icon className="h-8 w-8" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-5">
        <div className="text-sm text-muted-foreground">Eco Technologies</div>
      </SidebarFooter>
    </Sidebar>
  );
}
