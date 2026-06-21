import Link from "next/link";
import PostCard from "./PostCard";
import SmartImage from "./SmartImage";

const CATEGORY_META = {
  ai:              { label: "AI Tools",      badge: "bg-violet-600" },
  programming:     { label: "Programming",   badge: "bg-blue-600"   },
  "ai-programming":{ label: "AI + Code",     badge: "bg-gradient-to-r from-blue-600 to-violet-600" },
};

function formatDate(str) {
  if (!str) return "";
  const [y, m, d] = str.split("-");
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${months[+m - 1]} ${+d}, ${y}`;
}

function BigFeaturedCard({ post }) {
  const cat = CATEGORY_META[post.category] ?? { label: post.category, badge: "bg-violet-600" };

  return (
    <Link href={`/blog/${post.category}/${post.slug}`} className="group block">
      <article className="overflow-hidden rounded-3xl bg-white shadow-2xl shadow-black/30 border border-slate-100 hover:-translate-y-1 hover:shadow-black/50 transition-all duration-300">
        <div className="grid md:grid-cols-5">

          {/* ── Image (3 / 5) ───────────────────────── */}
          <div className="md:col-span-3 relative aspect-video md:aspect-auto md:min-h-[400px] overflow-hidden">
            <SmartImage
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
            />
            {/* top scrim for badge */}
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/55 to-transparent" />
            {/* badges */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className={`${cat.badge} px-3 py-1 rounded-full text-xs font-bold text-white tracking-wide shadow-md`}>
                {cat.label}
              </span>
              <span className="bg-amber-500 px-2.5 py-1 rounded-full text-xs font-bold text-white shadow-md">
                ★ Featured
              </span>
            </div>
          </div>

          {/* ── Content (2 / 5) ─────────────────────── */}
          <div className="md:col-span-2 flex flex-col justify-center p-8 lg:p-12">

            <div className="flex items-center gap-2.5 text-xs text-slate-400 font-medium mb-5">
              <time>{formatDate(post.date)}</time>
              {post.readingTime && (
                <>
                  <span className="text-slate-300">·</span>
                  <span>{post.readingTime}</span>
                </>
              )}
            </div>

            <h3 className="text-2xl lg:text-[1.75rem] font-black text-slate-900 leading-snug group-hover:text-purple-700 transition-colors duration-200 line-clamp-3">
              {post.title}
            </h3>

            {(post.excerpt || post.description) && (
              <p className="mt-4 text-slate-500 text-sm leading-relaxed line-clamp-3">
                {post.excerpt || post.description}
              </p>
            )}

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-500 truncate">
                  {post.author || "DevWithAI"}
                </span>
              </div>
              <span className="flex items-center gap-1.5 text-sm font-bold text-purple-600 group-hover:text-purple-700 transition-colors flex-shrink-0">
                Read Article
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"
                  className="group-hover:translate-x-0.5 transition-transform duration-200">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function FeaturedPosts({ posts = [] }) {
  const featuredPosts = posts.filter((p) => p.featured);
  if (!featuredPosts.length) return null;

  const [hero, ...rest] = featuredPosts;

  return (
    <section className="relative py-24 overflow-hidden">

      {/* background glows matching hero */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ── Section header ──────────────────────── */}
        <div className="flex items-end justify-between gap-6 flex-wrap mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-xs font-bold text-amber-400 uppercase tracking-widest mb-4">
              ★ Featured
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Must-Read
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Articles</span>
            </h2>
            <p className="mt-3 text-slate-400 text-base">Our best picks on AI tools and development</p>
          </div>

          <Link
            href="/blog"
            className="group flex items-center gap-1.5 text-sm font-semibold text-slate-400 hover:text-purple-400 transition-colors duration-200 whitespace-nowrap"
          >
            View all articles
            <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
          </Link>
        </div>

        {/* ── Big hero card ───────────────────────── */}
        <BigFeaturedCard post={hero} />

        {/* ── Remaining featured in grid ───────────── */}
        {rest.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {rest.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
