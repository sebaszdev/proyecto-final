import { Metadata } from "next";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/features/dashboard/DashboardSidebar";
import DashboardSiteHeader from "@/features/dashboard/DashboardSiteHeader";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <>
      <SidebarProvider
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 40)",
          } as React.CSSProperties
        }
      >
        <DashboardSidebar />
        <SidebarInset>
          <DashboardSiteHeader title="Dashboard" />
          <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance mt-10">
            Conoce el universo de Rick & Morty
          </h1>
          <ul className="my-6 mx-auto [&>li]:mt-2 text-xl">
            <li>
              Accede a los{" "}
              <Link
                href="/dashboard/characters"
                className="underline underline-offset-4"
              >
                personajes
              </Link>
            </li>
            <li>
              Accede a las{" "}
              <Link
                href="/dashboard/locations"
                className="underline underline-offset-4"
              >
                ubicaciones
              </Link>
            </li>
            <li>
              Accede a los{" "}
              <Link
                href="/dashboard/episodes"
                className="underline underline-offset-4"
              >
                episodios
              </Link>
            </li>
          </ul>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
