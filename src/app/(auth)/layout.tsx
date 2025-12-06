import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio",
  description: "Proyecto final para la competencia de desarrollo en React",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex-1 flex items-center justify-center">
      {children}
    </section>
  );
}
