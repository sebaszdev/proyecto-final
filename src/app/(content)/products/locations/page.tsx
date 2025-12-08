import { getLocations } from "@/services/rick_and_morty_client";
import LocationCard from "@/components/LocationCard";
import { LocationResponse } from "@/types/location";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function LocationsPage({ searchParams }: { searchParams: Promise<{ page?: string }>; }) {
    const params = await searchParams;
    const page = params.page || "1";
    const data: LocationResponse = await getLocations(`?page=${page}`);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-6">Localizaciones</h1>

            {/* Grid de localizaciones */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {data.results.map((location) => (
                    <LocationCard key={location.id} {...location} />
                ))}
            </div>

            {/* Paginación */}
            <div className="flex justify-center gap-4">
                {data.info.prev && (
                    <Button asChild variant="outline">
                        <Link href={`/products/locations?page=${Number(page) - 1}`}>
                            ← Anterior
                        </Link>
                    </Button>
                )}

                <span className="flex items-center">
                    Página {page} de {data.info.pages}
                </span>

                {data.info.next && (
                    <Button asChild variant="outline">
                        <Link href={`/products/locations?page=${Number(page) + 1}`}>
                            Siguiente →
                        </Link>
                    </Button>
                )}
            </div>
        </div>
    );
}
