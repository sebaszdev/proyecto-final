"use client";
// ideas:
// usar un estado para la paginacion, el estilo de las cartas me gusta
// es decir que sea solo una pagina mas no estar renderizando varias paginas

import CharCard from "@/components/CharCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useCharacters } from "@/hooks/useCharacters";

export default function ProductsPage() {
  const { page, loading, info, characters, next, prev } = useCharacters();

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
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
              Personajes
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {characters.map((character) => (
              <CharCard key={character.id} {...character} />
            ))}
          </div>
          <div className="flex justify-center gap-4">
            {info?.prev && (
              <Button variant="outline" onClick={prev}>
                ← Anterior
              </Button>
            )}

            <span className="flex items-center">
              Página {page} de {info?.pages}
            </span>
            {info?.next && (
              <Button variant="outline" onClick={next}>
                Siguiente →
              </Button>
            )}
          </div>
        </>
      )}
    </>
  );
}
