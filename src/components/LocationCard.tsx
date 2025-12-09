"use client";

import { Location } from "@/types/location";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function LocationCard({ id, name, type, dimension }: Location) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>Tipo: {type}</CardDescription>
        <CardDescription>Dimensión: {dimension}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">
          Localización del universo de Rick and Morty
        </p>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button asChild variant="outline" className="w-full">
          <Link href={`/products/locations/${id}`}>Ver detalles</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
