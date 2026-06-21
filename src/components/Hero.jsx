import Link from "next/link";

export default function Hero({ totalPosts = 0 }) {
  return (
    <section className="relative overflow-hidden min-h-[92vh] flex items-center">

      {/* ── Background ─────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-black to-black" />

      {/* glow orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-purple-700/10 blur-[130px] rounded-full" />
      <div className="absolute top-10 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[110px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-600/10 blur-[110px] rounded-full" />

      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* ── Content ────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-28 sm:py-36 text-center">

        {/* live badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-sm text-purple-300 font-medium mb-10">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse flex-shrink-0" />
          Fresh AI &amp; Dev articles published weekly
        </div>

        {/* headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.1] tracking-tight">
          <span className="text-white">Master AI Tools &amp;</span>
          <span className="block mt-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent pb-2">
            Level Up Your Code
          </span>
        </h1>

        {/* sub copy */}
        <p className="max-w-2xl mx-auto mt-7 text-lg sm:text-xl text-slate-400 leading-relaxed">
          In-depth tutorials, honest AI tool reviews, and real-world coding guides —
          written for developers who want to ship better software faster.
        </p>

        {/* stats strip */}
        <div className="flex items-center justify-center gap-8 sm:gap-14 mt-14 flex-wrap">
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-black text-white">
              {totalPosts}<span className="text-purple-400">+</span>
            </p>
            <p className="text-[11px] text-slate-500 mt-1 uppercase tracking-widest font-medium">Articles</p>
          </div>

          <div className="w-px h-10 bg-white/10 hidden sm:block" />

          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-black text-white">
              3<span className="text-blue-400">×</span>
            </p>
            <p className="text-[11px] text-slate-500 mt-1 uppercase tracking-widest font-medium">Categories</p>
          </div>

          <div className="w-px h-10 bg-white/10 hidden sm:block" />

          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-black text-white">
              100<span className="text-pink-400">%</span>
            </p>
            <p className="text-[11px] text-slate-500 mt-1 uppercase tracking-widest font-medium">Free Forever</p>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-14">
          <Link
            href="/blog"
            className="group px-9 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-semibold text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.03] transition-all duration-200"
          >
            Start Reading
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>

          <Link
            href="/ai"
            className="px-9 py-4 rounded-xl border border-white/15 text-slate-300 hover:border-purple-500/50 hover:text-white hover:bg-white/5 font-semibold transition-all duration-200"
          >
            Browse AI Articles
          </Link>
        </div>

        {/* category pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {[
            { label: "AI Tools",     href: "/ai",             cls: "bg-violet-500/10 border-violet-500/25 text-violet-300 hover:bg-violet-500/20" },
            { label: "Programming",  href: "/programming",    cls: "bg-blue-500/10   border-blue-500/25   text-blue-300   hover:bg-blue-500/20"   },
            { label: "AI + Code",    href: "/ai-programming", cls: "bg-pink-500/10   border-pink-500/25   text-pink-300   hover:bg-pink-500/20"   },
          ].map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition-colors duration-200 ${cat.cls}`}
            >
              {cat.label}
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
