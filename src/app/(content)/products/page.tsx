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
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
        Productos
      </h1>
      <p className="text-muted-foreground mb-8 mt-2">
        Explora el universo de Rick and Morty
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {/* Personajes */}
        <Card className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle>Personajes</CardTitle>
            <CardDescription>
              Descubre todos los personajes de la serie
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Explora la lista completa de personajes con información detallada
              sobre cada uno.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/products/characters">Ver personajes</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Episodios */}
        <Card className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle>Episodios</CardTitle>
            <CardDescription>
              Todos los episodios de Rick and Morty
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
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
        <Card className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle>Localizaciones</CardTitle>
            <CardDescription>
              Lugares del multiverso de Rick and Morty
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
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
    </>
  );
}
