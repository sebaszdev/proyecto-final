import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos | Ubicaciones",
};

export default function ProductsLocationsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
