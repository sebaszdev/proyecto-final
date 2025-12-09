import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Ubicaciones",
};

export default function DashboardLocationsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
