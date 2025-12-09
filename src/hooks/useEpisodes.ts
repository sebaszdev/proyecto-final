"use client";

import { useEpisodeStore } from "@/stores/useEpisodeStore";
import { getById } from "@/services/episodeService";

export function useEpisodes() {
  const store = useEpisodeStore();

  return { ...store, getById };
}
