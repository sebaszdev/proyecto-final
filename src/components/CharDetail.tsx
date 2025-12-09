"use client";
import { Character } from "@/types";
import Image from "next/image";

export default function CharDetail({
  name,
  status,
  gender,
  image,
  origin,
  location,
  species,
}: Character) {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <Image src={image} alt={name} width={300} height={300} loading="eager" className="rounded-lg" />

      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-4">{name}</h1>
        <dl className="space-y-2">
          <div>
            <dt className="font-semibold">Estado:</dt>
            <dd>{status}</dd>
          </div>
          <div>
            <dt className="font-semibold">Especie:</dt>
            <dd>{species}</dd>
          </div>
          <div>
            <dt className="font-semibold">Género:</dt>
            <dd>{gender}</dd>
          </div>
          <div>
            <dt className="font-semibold">Origen:</dt>
            <dd>{origin.name}</dd>
          </div>
          <div>
            <dt className="font-semibold">Ubicación:</dt>
            <dd>{location.name}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
