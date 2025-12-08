import { getEpisodeById } from "@/services/rick_and_morty_client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import EpisodeDetail from "@/components/EpisodeDetail";

export default async function EpisodeDetailPage({ params }: { params: Promise<{ id: string }>; }) {
    const resParams = await params;
    const id = resParams.id;

    try {
        const episode = await getEpisodeById(id);

        return (
            <div className="p-6 max-w-2xl mx-auto">
                <Button asChild variant="ghost" className="mb-4">
                    <Link href="/products/episodes">← Volver</Link>
                </Button>
                <EpisodeDetail {...episode} />
            </div>
        );
    } catch (error) {
        return (
            <div className="p-6 max-w-2xl mx-auto">
                <Button asChild variant="ghost" className="mb-4">
                    <Link href="/products/episodes">← Volver</Link>
                </Button>
                <div className="text-center py-12">
                    <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
                    <p className="text-gray-600">
                        {error instanceof Error ? error.message : 'No se pudo cargar el episodio'}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">ID solicitado: {id}</p>
                </div>
            </div>
        );
    }
}
