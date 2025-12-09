"use client";

import { useEffect, useState } from "react";
import type { ApiResponse, Character, FilterCharacter } from "@/types";
import { characterService } from "@/services/characterService";

export function useCharacterStore() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<FilterCharacter>({});
  const [info, setInfo] = useState<ApiResponse<Character>["info"] | null>(null);
  const [loading, setLoading] = useState(false);

  async function loadCharacters(pageNum = page, appliedFilters = filters) {
    setLoading(true);

    const data = await characterService.getAll({
      page: String(pageNum),
      filter: appliedFilters,
    });

    setCharacters(data.results ?? []);
    setInfo(data.info ?? null);
    setLoading(false);
  }

  useEffect(() => {
    loadCharacters();
  }, [page, filters]);

  return {
    characters,
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
    reload: (pageNum?: number, appliedFilters?: FilterCharacter) =>
      loadCharacters(pageNum ?? page, appliedFilters ?? filters),
  };
}
