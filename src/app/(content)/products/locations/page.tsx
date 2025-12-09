"use client";

import LocationCard from "@/components/LocationCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLocations } from "@/hooks/useLocations";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function LocationsPage() {
  const { page, loading, info, locations, next, prev } = useLocations();

  return (
    <>
      {loading ? (
        <div className="p-6">Cargando...</div>
      ) : (
      <>
      <div className="flex items-center mb-6 w-full gap-x-2">
      <Button variant="ghost">
        <ArrowLeft />
        <Link href="/products">Volver</Link>
      </Button>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">Localizaciones</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {locations.map((location) => (
          <LocationCard key={location.id} {...location} />
        ))}
      </div>
      <div className="flex justify-center gap-4">
        {info?.prev && (
          <Button variant="outline" onClick={prev}>
              <ArrowLeft />
              Anterior
          </Button>
        )}

        <span className="flex items-center">
          Página {page} de {info?.pages}
        </span>

        {info?.next && (
          <Button variant="outline" onClick={next}>
              Siguiente
              <ArrowRight />
          </Button>
        )}
      </div>
      </>
      )}
      </>
  );
}
