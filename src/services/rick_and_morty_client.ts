import { Character } from "@/types/character";
import { Episode } from "@/types/episode";
import { Location } from "@/types/location";

export async function getCharacters(parameter: string = "") {
  let res;

  if (!parameter) {
    res = await fetch("https://rickandmortyapi.com/api/character");
  } else {
    res = await fetch(`https://rickandmortyapi.com/api/character${parameter}`);
  }

  if (!res.ok) {
    throw new Error("Error al obtener los datos.");
  }

  return res.json();
}

export async function getCharacterById(id: string) {
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  console.log("Fetching character with ID:", id, "URL:", url);

  const res = await fetch(url);

  if (!res.ok) {
    console.error("Failed to fetch character:", res.status, res.statusText);
    throw new Error(
      `Error al obtener el personaje con ID ${id}. Status: ${res.status}`,
    );
  }

  return res.json() as Promise<Character>;
}

// Episodes
export async function getEpisodes(parameter: string = "") {
  let res;

  if (!parameter) {
    res = await fetch("https://rickandmortyapi.com/api/episode");
  } else {
    res = await fetch(`https://rickandmortyapi.com/api/episode${parameter}`);
  }

  if (!res.ok) {
    throw new Error("Error al obtener los episodios.");
  }

  return res.json();
}

export async function getEpisodeById(id: string) {
  const url = `https://rickandmortyapi.com/api/episode/${id}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(
      `Error al obtener el episodio con ID ${id}. Status: ${res.status}`,
    );
  }

  return res.json() as Promise<Episode>;
}

// Locations
export async function getLocations(parameter: string = "") {
  let res;

  if (!parameter) {
    res = await fetch("https://rickandmortyapi.com/api/location");
  } else {
    res = await fetch(`https://rickandmortyapi.com/api/location${parameter}`);
  }

  if (!res.ok) {
    throw new Error("Error al obtener las localizaciones.");
  }

  return res.json();
}

export async function getLocationById(id: string) {
  const url = `https://rickandmortyapi.com/api/location/${id}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(
      `Error al obtener la localización con ID ${id}. Status: ${res.status}`,
    );
  }

  return res.json() as Promise<Location>;
}
