import { Location } from "@/types/location";

export default function LocationDetail({
  name,
  type,
  dimension,
  residents,
}: Location) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-4">{name}</h1>
        <dl className="space-y-2">
          <div>
            <dt className="font-semibold">Tipo:</dt>
            <dd>{type}</dd>
          </div>
          <div>
            <dt className="font-semibold">Dimensión:</dt>
            <dd>{dimension}</dd>
          </div>
          <div>
            <dt className="font-semibold">Residentes:</dt>
            <dd>{residents.length} residentes</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
