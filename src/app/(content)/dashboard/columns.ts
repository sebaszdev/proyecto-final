"use client";

import type { Character, Episode, Location } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export const CharacterColumns: ColumnDef<Character>[] = [
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "status",
    header: "Estado",
  },
  {
    accessorKey: "species",
    header: "Especie",
  },
  {
    accessorKey: "type",
    header: "Tipo",
  },
  {
    accessorKey: "gender",
    header: "Genero",
  },
];

export const LocationColumns: ColumnDef<Location>[] = [
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "type",
    header: "Tipo",
  },
  {
    accessorKey: "dimension",
    header: "Dimension",
  },
];

export const EpisodeColumns: ColumnDef<Episode>[] = [
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "air_date",
    header: "Fecha de emisión",
  },
  {
    accessorKey: "episode",
    header: "Codigo de episodio",
  },
];
