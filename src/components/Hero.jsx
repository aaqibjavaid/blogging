import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-blue-500/10 blur-[150px]" />
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-purple-500/10 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 py-32 text-center relative z-10">
        <span className="inline-block px-4 py-2 rounded-full border border-white/10 text-sm text-slate-1000">
          AI • Programming • AI-Powered Development
        </span>

        <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
          Learn AI &
          <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Build Better Software
          </span>
        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-lg text-slate-400 leading-8">
          Practical tutorials, AI tools, React development guides,
          coding workflows, and real-world projects for developers.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <Link
            href="/ai"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-medium"
          >
            Explore Articles
          </Link>

          {/* <Link
            href="/about"
            className="px-8 py-4 rounded-xl border border-white/10"
          >
            About DevWithAI
          </Link> */}
        </div>
      </div>
    </section>
  );
}