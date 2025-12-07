import { Metadata } from "next";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/features/dashboard/DashboardSidebar";
import DashboardSiteHeader from "@/features/dashboard/DashboardSiteHeader";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <>
      <SidebarProvider
        style={{
          "--sidebar-width": "calc(var(--spacing) * 40)",
          } as React.CSSProperties
        }>
        <DashboardSidebar />
        <SidebarInset>
          <DashboardSiteHeader title="Hola"/>
        </SidebarInset>
      </SidebarProvider>
    </>
 );
}
