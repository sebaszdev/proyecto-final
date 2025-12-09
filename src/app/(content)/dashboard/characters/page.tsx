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
import { CircleUserRound, BookSearch, SlidersHorizontal } from "lucide-react";
import DashboardTable from "@/features/dashboard/DashboardTable";
import { CharacterColumns } from "@/app/(content)/dashboard/columns";
import { useCharacters } from "@/hooks/useCharacters";

export default function DashboardCharacters() {
  const { characters, loading, page, info, next, prev } = useCharacters();

  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "calc(var(--spacing) * 40)",
        } as React.CSSProperties
      }>
      <DashboardSidebar />
      <SidebarInset>
        <DashboardSiteHeader title="Personajes"/>
        <DashboardCardsSection>
          <Card className="py-12">
            <CardHeader>
              <span className="flex items-center justify-center gap-x-2">
                <CardTitle className="text-xl text-center">Personajes</CardTitle>
                <CircleUserRound />
              </span>
              <CardDescription className="text-center">Busca entre los 826 personajes disponibles</CardDescription>
            </CardHeader>
          </Card>
          <Card className="py-12">
            <CardHeader>
              <span className="flex items-center justify-center gap-x-2">
                <CardTitle className="text-xl text-center">Nombre</CardTitle>
                <BookSearch />
              </span>
              <CardDescription className="text-center">Busca tu personaje favorito por su nombre</CardDescription>
            </CardHeader>
          </Card>
          <Card className="py-12">
            <CardHeader>
              <span className="flex items-center justify-center gap-x-2">
                <CardTitle className="text-xl text-center">Vivo o muerto</CardTitle>
                <SlidersHorizontal />
              </span>
              <CardDescription className="text-center">Filtra por estado, especie o tipo</CardDescription>
            </CardHeader>
          </Card>
        </DashboardCardsSection>
        <DashboardTable columns={CharacterColumns} data={characters} loading={loading} page={page} pages={info?.pages ?? 1} onNext={next} onPrev={prev} />
      </SidebarInset>
    </SidebarProvider>
  );
}
