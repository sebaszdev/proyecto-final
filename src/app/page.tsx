import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PersonStanding, House, Videotape } from "lucide-react";

export default function Home() {
  const cards = [
    {
      title: "Personajes",
      body: <PersonStanding size={100} color="#FF99CC" className="mx-auto" />,
      footer: "Accede a los personajes de la serie",
    },
    {
      title: "Localizaciones",
      body: <House size={100} color="#33CC33" className="mx-auto" />,
      footer: "Accede a las localizaciones de la serie",
    },
    {
      title: "Episodios",
      body: <Videotape size={100} color="#87CEEB" className="mx-auto" />,
      footer: "Accede a los episodios de la serie",
    },
  ];

  return (
    <main className="flex-1 flex flex-col">
      <section className="w-full flex flex-col h-[400px] justify-center bg-muted">
        <h1 className="scroll-m-20 text-center text-6xl text-shadow-lg font-extrabold tracking-tight text-balance">
          Rick & Morty
        </h1>
        <p className="leading-7 text-center [&:not(:first-child)]:mt-6">
          Mira los personajes, episodios y localizaciones de Rick & Morty
        </p>
      </section>
      <section className="flex flex-wrap h-full justify-around content-center gap-y-4">
        {cards.map((card, index) => (
          <Card key={index} className="w-md flex flex-col gap-y-15">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                {card.title}
              </CardTitle>
            </CardHeader>
            <CardContent>{card.body}</CardContent>
            <CardFooter className="flex justify-center">
              {card.footer}
            </CardFooter>
          </Card>
        ))}
      </section>
    </main>
  );
}
