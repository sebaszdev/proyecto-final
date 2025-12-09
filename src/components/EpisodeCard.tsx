"use client";

import { Episode } from "@/types/episode";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function EpisodeCard({ id, name, air_date, episode }: Episode) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{episode}</CardDescription>
        <CardDescription>Emitido: {air_date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          Episodio de la serie Rick and Morty
        </p>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button asChild variant="outline" className="w-full">
          <Link href={`/products/episodes/${id}`}>Ver detalles</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
