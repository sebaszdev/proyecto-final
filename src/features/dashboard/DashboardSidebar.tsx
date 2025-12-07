"use client";

import { UsersRound, MapPinHouse, Video, ArrowBigUp } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "./DashboardNav.tsx";
import type { LucideIcon } from "lucide-react";
const nav: {
  title: string,
  url: string,
  icon: LucideIcon,
}[] = [
  {
    title: "Personajes",
    url: "#",
    icon: UsersRound,
  },
  {
    title: "Ubicaciones",
    url: "#",
    icon: MapPinHouse,
  },
  {
    title: "Episodios",
    url: "#",
    icon: Video,
  },
];

export default function DashboardSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="none" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
            >
              <a href="#">
                <ArrowBigUp />
                <span className="text-base font-semibold">Rick & Morty</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={nav} />
      </SidebarContent>
      <SidebarFooter>
        <div className="w-10 h-10">
          <img
            src="https://media1.tenor.com/m/nCv8sCQi3s4AAAAd/among-us.gif"
            alt="sus"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
