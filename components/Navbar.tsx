import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center p-4 border-b">
      <h1 className="text-xl font-bold">NAMA Med History</h1>

      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/new-case">New Case</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}
