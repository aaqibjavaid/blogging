import Link from "next/link";
import PostCard from "./PostCard";

const CATEGORY_META = {
  ai:              { label: "AI Tools",    color: "text-violet-400", badge: "bg-violet-500/10 border-violet-500/25 text-violet-400", href: "/ai"             },
  programming:     { label: "Programming", color: "text-blue-400",   badge: "bg-blue-500/10 border-blue-500/25 text-blue-400",       href: "/programming"    },
  "ai-programming":{ label: "AI + Code",   color: "text-pink-400",   badge: "bg-pink-500/10 border-pink-500/25 text-pink-400",       href: "/ai-programming" },
};

export default function RelatedArticles({ currentPost, posts }) {
  const relatedPosts = posts
    .filter((p) => p.category === currentPost.category && p.slug !== currentPost.slug)
    .slice(0, 3);

  if (!relatedPosts.length) return null;

  const meta = CATEGORY_META[currentPost.category] ?? {
    label: currentPost.category,
    color: "text-purple-400",
    badge: "bg-purple-500/10 border-purple-500/25 text-purple-400",
    href: "/blog",
  };

  return (
    <section className="relative mt-20 pt-16">

      {/* top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* background glow */}
      <div className="absolute inset-x-0 top-0 h-[400px] " />

      <div className="relative">

        {/* ── Section header ──────────────────────── */}
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
          <div>
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest mb-4 ${meta.badge}`}>
              ◈ More Like This
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-400 leading-tight">
              Related
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Articles</span>
            </h2>
            <p className="mt-2 text-slate-500 text-sm">
              More from the <span className={`font-semibold ${meta.color}`}>{meta.label}</span> category
            </p>
          </div>

          <Link
            href={meta.href}
            className="group flex items-center gap-1.5 text-sm font-semibold text-slate-400 hover:text-purple-400 transition-colors duration-200 whitespace-nowrap"
          >
            Browse all {meta.label}
            <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
          </Link>
        </div>

        {/* ── Cards ───────────────────────────────── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

      </div>
    </section>
  );
}
