import { getCharacterById } from "@/services/rick_and_morty_client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CharDetail from "@/components/CharDetail";

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  console.log('ProductDetailPage - Received params:', params);

  try {
    const character = await getCharacterById(params.id);
    console.log('Successfully fetched character:', character.name);

    return (
      <div className="p-6 max-w-2xl mx-auto">
        <Button asChild variant="ghost" className="mb-4">
          <Link href="/products">← Volver</Link>
        </Button>
        <CharDetail {...character} />
      </div>
    );
  } catch (error) {
    console.error('Error in ProductDetailPage:', error);
    return (
      <div className="p-6 max-w-2xl mx-auto">
        <Button asChild variant="ghost" className="mb-4">
          <Link href="/products">← Volver</Link>
        </Button>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-gray-600">
            {error instanceof Error ? error.message : 'No se pudo cargar el personaje'}
          </p>
          <p className="text-sm text-gray-500 mt-2">ID solicitado: {params.id}</p>
        </div>
      </div>
    );
  }
}