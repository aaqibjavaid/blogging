import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between">
        <Link href="/" className="font-bold text-xl">
          DevWithAI
        </Link>

        <nav className="flex gap-6">
          <Link href="/ai">AI</Link>
          <Link href="/programming">Programming</Link>
          <Link href="/ai-programming">AI + Programming</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </div>
    </header>
  );
}
