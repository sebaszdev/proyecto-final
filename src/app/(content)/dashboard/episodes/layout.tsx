import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Episodios",
};

export default function DashboardEpisodesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
