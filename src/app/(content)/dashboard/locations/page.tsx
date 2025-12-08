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
import { Location } from "@/types";
import { LocationColumns } from "@/app/(content)/dashboard/columns";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Ubicaciones",
};

const data: Location[] = [
  {
    "id": 3,
    "name": "Citadel of Ricks",
    "type": "Space station",
    "dimension": "unknown",
    "residents": [
      "https://rickandmortyapi.com/api/character/8",
      "https://rickandmortyapi.com/api/character/14",
      "https://rickandmortyapi.com/api/character/15",
      "https://rickandmortyapi.com/api/character/18",
      "https://rickandmortyapi.com/api/character/21",
      "https://rickandmortyapi.com/api/character/22",
      "https://rickandmortyapi.com/api/character/27",
      "https://rickandmortyapi.com/api/character/42",
      "https://rickandmortyapi.com/api/character/43",
      "https://rickandmortyapi.com/api/character/44",
      "https://rickandmortyapi.com/api/character/48",
      "https://rickandmortyapi.com/api/character/53",
      "https://rickandmortyapi.com/api/character/56",
      "https://rickandmortyapi.com/api/character/61",
      "https://rickandmortyapi.com/api/character/69",
      "https://rickandmortyapi.com/api/character/72",
      "https://rickandmortyapi.com/api/character/73",
      "https://rickandmortyapi.com/api/character/74",
      "https://rickandmortyapi.com/api/character/77",
      "https://rickandmortyapi.com/api/character/78",
      "https://rickandmortyapi.com/api/character/85",
      "https://rickandmortyapi.com/api/character/86",
      "https://rickandmortyapi.com/api/character/95",
      "https://rickandmortyapi.com/api/character/118",
      "https://rickandmortyapi.com/api/character/119",
      "https://rickandmortyapi.com/api/character/123",
      "https://rickandmortyapi.com/api/character/135",
      "https://rickandmortyapi.com/api/character/143",
      "https://rickandmortyapi.com/api/character/152",
      "https://rickandmortyapi.com/api/character/164",
      "https://rickandmortyapi.com/api/character/165",
      "https://rickandmortyapi.com/api/character/187",
      "https://rickandmortyapi.com/api/character/200",
      "https://rickandmortyapi.com/api/character/206",
      "https://rickandmortyapi.com/api/character/209",
      "https://rickandmortyapi.com/api/character/220",
      "https://rickandmortyapi.com/api/character/229",
      "https://rickandmortyapi.com/api/character/231",
      "https://rickandmortyapi.com/api/character/235",
      "https://rickandmortyapi.com/api/character/267",
      "https://rickandmortyapi.com/api/character/278",
      "https://rickandmortyapi.com/api/character/281",
      "https://rickandmortyapi.com/api/character/283",
      "https://rickandmortyapi.com/api/character/284",
      "https://rickandmortyapi.com/api/character/285",
      "https://rickandmortyapi.com/api/character/286",
      "https://rickandmortyapi.com/api/character/287",
      "https://rickandmortyapi.com/api/character/288",
      "https://rickandmortyapi.com/api/character/289",
      "https://rickandmortyapi.com/api/character/291",
      "https://rickandmortyapi.com/api/character/295",
      "https://rickandmortyapi.com/api/character/298",
      "https://rickandmortyapi.com/api/character/299",
      "https://rickandmortyapi.com/api/character/322",
      "https://rickandmortyapi.com/api/character/325",
      "https://rickandmortyapi.com/api/character/328",
      "https://rickandmortyapi.com/api/character/330",
      "https://rickandmortyapi.com/api/character/345",
      "https://rickandmortyapi.com/api/character/359",
      "https://rickandmortyapi.com/api/character/366",
      "https://rickandmortyapi.com/api/character/378",
      "https://rickandmortyapi.com/api/character/385",
      "https://rickandmortyapi.com/api/character/392",
      "https://rickandmortyapi.com/api/character/461",
      "https://rickandmortyapi.com/api/character/462",
      "https://rickandmortyapi.com/api/character/463",
      "https://rickandmortyapi.com/api/character/464",
      "https://rickandmortyapi.com/api/character/465",
      "https://rickandmortyapi.com/api/character/466",
      "https://rickandmortyapi.com/api/character/472",
      "https://rickandmortyapi.com/api/character/473",
      "https://rickandmortyapi.com/api/character/474",
      "https://rickandmortyapi.com/api/character/475",
      "https://rickandmortyapi.com/api/character/476",
      "https://rickandmortyapi.com/api/character/477",
      "https://rickandmortyapi.com/api/character/478",
      "https://rickandmortyapi.com/api/character/479",
      "https://rickandmortyapi.com/api/character/480",
      "https://rickandmortyapi.com/api/character/481",
      "https://rickandmortyapi.com/api/character/482",
      "https://rickandmortyapi.com/api/character/483",
      "https://rickandmortyapi.com/api/character/484",
      "https://rickandmortyapi.com/api/character/485",
      "https://rickandmortyapi.com/api/character/486",
      "https://rickandmortyapi.com/api/character/487",
      "https://rickandmortyapi.com/api/character/488",
      "https://rickandmortyapi.com/api/character/489",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/801",
      "https://rickandmortyapi.com/api/character/802",
      "https://rickandmortyapi.com/api/character/803",
      "https://rickandmortyapi.com/api/character/804",
      "https://rickandmortyapi.com/api/character/805",
      "https://rickandmortyapi.com/api/character/806",
      "https://rickandmortyapi.com/api/character/810",
      "https://rickandmortyapi.com/api/character/811",
      "https://rickandmortyapi.com/api/character/812",
      "https://rickandmortyapi.com/api/character/819",
      "https://rickandmortyapi.com/api/character/820",
      "https://rickandmortyapi.com/api/character/818"
    ],
    "url": "https://rickandmortyapi.com/api/location/3",
    "created": "2017-11-10T13:08:13.191Z"
  }
];
export default function DashboardLocations() {
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
        <DashboardTable columns={LocationColumns} data={data}/>
      </SidebarInset>
    </SidebarProvider>
  );
}
