"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import CharDetail from "@/components/CharDetail";
import { useCharacters } from "@/hooks/useCharacters";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Character } from "@/types";
import { ArrowLeft } from "lucide-react";

export default function ProductDetailPage() {
  const [character, setCharacter] = useState<Character | null>(null);
  const { getById } = useCharacters();
  const params = useParams();
  const id = params.id as string;

  useEffect(() => {
    getById(id).then((data) => setCharacter(data));
  }, [id]);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      {character ? (
        <>
          <Button variant="ghost" className="mb-2">
            <ArrowLeft />
            <Link href="/products/characters">Volver</Link>
          </Button>
          <CharDetail {...character} />
        </>
      ) : (
        <div>Cargando...</div>
      )}
    </div>
  );
}
