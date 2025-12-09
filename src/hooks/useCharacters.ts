"use client";

import { useCharacterStore } from "@/stores/useCharacterStore";
import { getById } from "@/services/characterService";

export function useCharacters() {
  const store = useCharacterStore();

  return { ...store, getById };
}
