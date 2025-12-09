import { Episode } from "@/types/episode";

export default function EpisodeDetail({
  name,
  air_date,
  episode,
  characters,
}: Episode) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-4">{name}</h1>
        <dl className="space-y-2">
          <div>
            <dt className="font-semibold">Código del episodio:</dt>
            <dd>{episode}</dd>
          </div>
          <div>
            <dt className="font-semibold">Fecha de emisión:</dt>
            <dd>{air_date}</dd>
          </div>
          <div>
            <dt className="font-semibold">Personajes que aparecen:</dt>
            <dd>{characters.length} personajes</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
