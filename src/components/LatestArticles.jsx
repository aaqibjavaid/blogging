import Link from "next/link";
import PostCard from "./PostCard";

const LATEST_COUNT = 6;

export default function LatestArticles({ posts = [] }) {
  const latestPosts = posts.slice(0, LATEST_COUNT);
  if (!latestPosts.length) return null;

  return (
    <section className="relative py-24 overflow-hidden">

      {/* background glows */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-purple-600/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-blue-600/5 blur-[110px] rounded-full pointer-events-none" />

      {/* top divider line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ── Section header ──────────────────────── */}
        <div className="flex items-end justify-between gap-6 flex-wrap mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">
              ✦ Latest
            </div>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight">
              Fresh
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Articles</span>
            </h2>
            <p className="mt-3 text-slate-400 text-base">
              The newest guides and tutorials — hot off the press
            </p>
          </div>

          <Link
            href="/blog"
            className="group flex items-center gap-1.5 text-sm font-semibold text-slate-400 hover:text-purple-400 transition-colors duration-200 whitespace-nowrap"
          >
            Browse all articles
            <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
          </Link>
        </div>

        {/* ── Grid ────────────────────────────────── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        {/* ── Bottom CTA ──────────────────────────── */}
        <div className="mt-14 text-center">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 text-slate-300 hover:border-purple-500/50 hover:text-white hover:bg-white/5 font-semibold transition-all duration-200 text-sm"
          >
            View all articles
            <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
