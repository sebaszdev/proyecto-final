"use client";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import DashboardCardsSection from "@/features/dashboard/DasboardCardsSection";
import DashboardSidebar from "@/features/dashboard/DashboardSidebar";
import DashboardSiteHeader from "@/features/dashboard/DashboardSiteHeader";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building2, BookSearch, SlidersHorizontal } from "lucide-react";
import DashboardTable from "@/features/dashboard/DashboardTable";
import { LocationColumns } from "@/app/(content)/dashboard/columns";
import { useLocations } from "@/hooks/useLocations";

export default function DashboardLocations() {
  const { locations, loading, page, info, next, prev } = useLocations();

  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "calc(var(--spacing) * 40)",
        } as React.CSSProperties
      }>
      <DashboardSidebar />
      <SidebarInset>
        <DashboardSiteHeader title="Ubicaciones"/>
        <DashboardCardsSection>
          <Card className="py-12">
            <CardHeader>
              <span className="flex items-center justify-center gap-x-2">
                <CardTitle className="text-xl text-center">Localizaciones</CardTitle>
                <Building2 />
              </span>
              <CardDescription className="text-center">Busca entre las 126 Localizaciones disponibles</CardDescription>
            </CardHeader>
          </Card>
          <Card className="py-12">
            <CardHeader>
              <span className="flex items-center justify-center gap-x-2">
                <CardTitle className="text-xl text-center">Nombre</CardTitle>
                <BookSearch />
              </span>
              <CardDescription className="text-center">Busca tu lugar favorito por su nombre</CardDescription>
            </CardHeader>
          </Card>
          <Card className="py-12">
            <CardHeader>
              <span className="flex items-center justify-center gap-x-2">
                <CardTitle className="text-xl text-center">Filtra</CardTitle>
                <SlidersHorizontal />
              </span>
              <CardDescription className="text-center">Filtra por tipo o dimension</CardDescription>
            </CardHeader>
          </Card>
        </DashboardCardsSection>
        <DashboardTable columns={LocationColumns} data={locations} loading={loading} page={page} pages={info?.pages ?? 1} onNext={next} onPrev={prev} />
      </SidebarInset>
    </SidebarProvider>
  );
}
