"use client";

import { useEffect, useState } from "react";
import type { ApiResponse, Location, FilterLocation } from "@/types";
import { locationService } from "@/services/locationService";

export function useLocationStore() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<FilterLocation>({});
  const [info, setInfo] = useState<ApiResponse<Location>["info"] | null>(null);
  const [loading, setLoading] = useState(false);

  async function loadLocations(pageNum = page, appliedFilters = filters) {
    setLoading(true);

    const data = await locationService.getAll({
      page: String(pageNum),
      filter: appliedFilters,
    });

    setLocations(data.results ?? []);
    setInfo(data.info ?? null);
    setLoading(false);
  }

  useEffect(() => {
    loadLocations();
  }, [page, filters]);

  return {
    locations,
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
      if (info?.prev) setPage(page + 1);
    },
    reload: (pageNum?: number, appliedFilters?: FilterLocation) => loadLocations(pageNum ?? page, appliedFilters ?? filters),
  };
}
