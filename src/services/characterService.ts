import { FilterCharacter } from "@/types";

export async function getAll(params?: {
  page?: string;
  filter?: FilterCharacter;
}) {
  const searchParams = new URLSearchParams({
    ...(params?.page ? { page: params.page } : {}),
    ...(params?.filter || {}),
  });

  const query = searchParams.toString();

  const res = await fetch(query ? `/api/character?${query}` : `/api/character`);

  return res.json();
}

export async function getById(id: number | string) {
  const res = await fetch(`/api/character/${id}`);

  return res.json();
}

export const characterService = {
  getAll,
  getById,
};
