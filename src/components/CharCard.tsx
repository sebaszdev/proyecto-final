"use client";

// import { getCharacters } from "@/services/rick_and_morty_client";
import { Character } from "@/types/character";
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
import Image from "next/image";

export default function CharCard({
  id,
  name,
  status,
  gender,
  image,
  url,
}: Character) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{status}</CardDescription>
        <CardDescription>{gender}</CardDescription>
        <CardAction>
          <Button variant="link" onClick={() => window.open(url, "_blank")}>
            Ver más
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Image src={image} alt={name} width={300} height={300} />
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button asChild variant="outline" className="w-full">
          <Link href={`/products/characters/${id}`}>Ver más</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
