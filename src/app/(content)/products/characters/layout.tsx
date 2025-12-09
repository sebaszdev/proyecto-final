import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos | Personajes",
};

export default function ProductsCharactersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
