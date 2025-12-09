import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex-1 max-w-screen mx-auto p-6">{children}</section>
  );
}
