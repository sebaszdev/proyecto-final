import { FilterLocation } from "@/types";

export async function getAll(params?: {
  page?: string;
  filter?: FilterLocation;
}) {
  const searchParams = new URLSearchParams({
    ...(params?.page ? { page: params.page } : {}),
    ...(params?.filter || {}),
  });

  const query = searchParams.toString();

  const res = await fetch(query ? `/api/location?${query}` : `/api/location`);

  return res.json();
}

export async function getById(id: number | string) {
  const res = await fetch(`/api/location/${id}`);

  return res.json();
}

export const locationService = {
  getAll,
  getById,
};
