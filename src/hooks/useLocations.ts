"use client";

import { useLocationStore } from "@/stores/useLocationStore";
import { getById } from "@/services/locationService";

export function useLocations() {
  const store = useLocationStore();

  return { ...store, getById };
}
