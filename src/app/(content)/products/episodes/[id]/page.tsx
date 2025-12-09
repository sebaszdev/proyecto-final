"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import EpisodeDetail from "@/components/EpisodeDetail";
import { useEpisodes } from "@/hooks/useEpisodes";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Episode } from "@/types";
import { ArrowLeft } from "lucide-react";

export default function ProductDetailPage() {
  const [episode, setEpisode] = useState<Episode | null>(null);
  const { getById } = useEpisodes();
  const params = useParams();
  const id = params.id as string;

  useEffect(() => {
    getById(id).then((data) => setEpisode(data));
  }, [id]);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      {episode ? (
        <>
          <Button variant="ghost" className="mb-2">
            <ArrowLeft />
            <Link href="/products/episodes">Volver</Link>
          </Button>
          <EpisodeDetail {...episode} />
        </>
      ) : (
        <div>Cargando...</div>
      )}
    </div>
  );
}
