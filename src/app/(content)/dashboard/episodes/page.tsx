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
import { Tv, BookSearch, SlidersHorizontal } from "lucide-react";
import DashboardTable from "@/features/dashboard/DashboardTable";
import { EpisodeColumns } from "@/app/(content)/dashboard/columns";
import { useEpisodes } from "@/hooks/useEpisodes";

export default function DashboardEpisodes() {
  const { episodes, loading, page, info, next, prev } = useEpisodes();

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 40)",
        } as React.CSSProperties
      }
    >
      <DashboardSidebar />
      <SidebarInset>
        <DashboardSiteHeader title="Episodios" />
        <DashboardCardsSection>
          <Card className="py-12">
            <CardHeader>
              <span className="flex items-center justify-center gap-x-2">
                <CardTitle className="text-xl text-center">Episodios</CardTitle>
                <Tv />
              </span>
              <CardDescription className="text-center">
                Busca entre los 51 episodios disponibles
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="py-12">
            <CardHeader>
              <span className="flex items-center justify-center gap-x-2">
                <CardTitle className="text-xl text-center">Nombre</CardTitle>
                <BookSearch />
              </span>
              <CardDescription className="text-center">
                Busca tu episodio favorito por su nombre
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="py-12">
            <CardHeader>
              <span className="flex items-center justify-center gap-x-2">
                <CardTitle className="text-xl text-center">Filtra</CardTitle>
                <SlidersHorizontal />
              </span>
              <CardDescription className="text-center">
                Filtra por nombre o código de episodio
              </CardDescription>
            </CardHeader>
          </Card>
        </DashboardCardsSection>
        <DashboardTable
          columns={EpisodeColumns}
          data={episodes}
          loading={loading}
          page={page}
          pages={info?.pages ?? 1}
          onNext={next}
          onPrev={prev}
        />
      </SidebarInset>
    </SidebarProvider>
  );
}
