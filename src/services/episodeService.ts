import { FilterEpisode } from "@/types";

export async function getAll(params?: { page?: string, filter?: FilterEpisode }) {
  const searchParams = new URLSearchParams({
    ...(params?.page ? { page: params.page } : {}),
    ...(params?.filter || {}),
  });

  const query = searchParams.toString()

  const res = await fetch(
    query 
    ? `/api/episode?${query}`
    : `/api/episode`
  );

  return res.json();
}

export async function getById(id: number | string) {
  const res = await fetch(`/api/episode/${id}`);

  return res.json();
}

export const episodeService = {
  getAll,
  getById,
};
