"use client";

import { useEffect, useState } from "react";
import type { ApiResponse, Episode, FilterEpisode } from "@/types";
import { episodeService } from "@/services/episodeService";

export function useEpisodeStore() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<FilterEpisode>({});
  const [info, setInfo] = useState<ApiResponse<Episode>["info"] | null>(null);
  const [loading, setLoading] = useState(false);

  async function loadEpisodes(pageNum = page, appliedFilters = filters) {
    setLoading(true);

    const data = await episodeService.getAll({
      page: String(pageNum),
      filter: appliedFilters,
    });

    setEpisodes(data.results ?? []);
    setInfo(data.info ?? null);
    setLoading(false);
  }

  useEffect(() => {
    loadEpisodes();
  }, [page, filters]);

  return {
    episodes,
    info,
    loading,
    page,
    setPage,
    filters,
    setFilters,
    next: () => {
      if (info?.next) setPage(page + 1);
    },
    prev: () => {
      if (info?.prev) setPage(page - 1);
    },
    reload: (pageNum?: number, appliedFilters?: FilterEpisode) =>
      loadEpisodes(pageNum ?? page, appliedFilters ?? filters),
  };
}
