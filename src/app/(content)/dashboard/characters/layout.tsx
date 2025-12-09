import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Personajes",
};

export default function DashboardCharactersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
