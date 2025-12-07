import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav className="flex gap-4 p-4 border-b">
        <Link href="/" className="hover:underline underline-offset-4">Inicio</Link>
        <Link href="/products" className="hover:underline underline-offset-4">Productos</Link>
        <Link href="/dashboard" className="hover:underline underline-offset-4">Dashboard</Link>
        <Link href="/login"className="hover:underline underline-offset-4">Login</Link>
      </nav>
    </header>
  );
}
