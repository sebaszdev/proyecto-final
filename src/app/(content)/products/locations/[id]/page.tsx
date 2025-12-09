"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import LocationDetail from "@/components/LocationDetail";
import { useLocations } from "@/hooks/useLocations";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Location } from "@/types";
import { ArrowLeft } from "lucide-react";

export default function ProductDetailPage() {
  const [location, setLocation] = useState<Location | null>(null);
  const { getById } = useLocations();
  const params = useParams();
  const id = params.id as string;

  useEffect(() => {
    getById(id).then((data) => setLocation(data));
  }, [id]);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      {location ? (
        <>
          <Button variant="ghost" className="mb-2">
            <ArrowLeft />
            <Link href="/products/episodes">Volver</Link>
          </Button>
          <LocationDetail {...location} />
        </>
      ) : (
        <div>Cargando...</div>
      )}
    </div>
  );
}
