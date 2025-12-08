import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function ProductsPage() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-2">Productos</h1>
            <p className="text-gray-600 mb-8">
                Explora el universo de Rick and Morty
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
                {/* Personajes */}
                <Card>
                    <CardHeader>
                        <CardTitle>Personajes</CardTitle>
                        <CardDescription>
                            Descubre todos los personajes de la serie
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-gray-600">
                            Explora la lista completa de personajes con información detallada sobre cada uno.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Button asChild className="w-full">
                            <Link href="/products/characters">Ver personajes</Link>
                        </Button>
                    </CardFooter>
                </Card>

                {/* Episodios */}
                <Card>
                    <CardHeader>
                        <CardTitle>Episodios</CardTitle>
                        <CardDescription>
                            Todos los episodios de Rick and Morty
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-gray-600">
                            Navega por todos los episodios con fechas de emisión y códigos.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Button asChild className="w-full">
                            <Link href="/products/episodes">Ver episodios</Link>
                        </Button>
                    </CardFooter>
                </Card>

                {/* Localizaciones */}
                <Card>
                    <CardHeader>
                        <CardTitle>Localizaciones</CardTitle>
                        <CardDescription>
                            Lugares del multiverso de Rick and Morty
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-gray-600">
                            Descubre todas las localizaciones y dimensiones del universo.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Button asChild className="w-full">
                            <Link href="/products/locations">Ver localizaciones</Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
