import SmartImage from "./SmartImage";
import Link from "next/link";

const CATEGORY_META = {
  ai: {
    label: "AI Tools",
    badge: "bg-violet-500/15 border-violet-500/30 text-violet-400",
    dot: "bg-violet-400",
    href: "/ai",
  },
  programming: {
    label: "Programming",
    badge: "bg-blue-500/15 border-blue-500/30 text-blue-400",
    dot: "bg-blue-400",
    href: "/programming",
  },
  "ai-programming": {
    label: "AI + Code",
    badge: "bg-pink-500/15 border-pink-500/30 text-pink-400",
    dot: "bg-pink-400",
    href: "/ai-programming",
  },
};

function formatDate(str) {
  if (!str) return "";
  const [y, m, d] = str.split("-");
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${months[+m - 1]} ${+d}, ${y}`;
}

export default function ArticleHeader({ post }) {
  if (!post) return null;

  const meta = CATEGORY_META[post.category] ?? {
    label: post.category,
    badge: "bg-purple-500/15 border-purple-500/30 text-purple-400",
    dot: "bg-purple-400",
    href: "/blog",
  };

  return (
    <header className="mb-14">

      {/* ── Breadcrumb ──────────────────────────── */}
      <nav className="flex items-center gap-2 text-xs text-slate-600 font-medium mb-8">
        <Link href="/" className="hover:text-slate-400 transition-colors duration-150">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-slate-400 transition-colors duration-150">Blog</Link>
        <span>/</span>
        <Link href={meta.href} className="hover:text-slate-400 transition-colors duration-150">{meta.label}</Link>
      </nav>

      {/* ── Badges ──────────────────────────────── */}
      <div className="flex items-center gap-2 flex-wrap mb-6">
        <Link
          href={meta.href}
          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest transition-opacity duration-150 hover:opacity-80 ${meta.badge}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${meta.dot}`} />
          {meta.label}
        </Link>
        {post.featured && (
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border bg-amber-500/15 border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            ★ Featured
          </span>
        )}
      </div>

      {/* ── Title ───────────────────────────────── */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight mb-6">
        {post.title}
      </h1>

      {/* ── Meta row ────────────────────────────── */}
      <div className="flex items-center gap-4 flex-wrap mb-10">
        {/* author */}
        <div className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex-shrink-0 flex items-center justify-center text-white text-xs font-black">
            {(post.author || "D")[0].toUpperCase()}
          </span>
          <span className="text-sm font-semibold text-slate-300">
            {post.author || "DevWithAI"}
          </span>
        </div>

        <span className="w-px h-4 bg-white/15" />

        {/* date */}
        {post.date && (
          <time className="text-sm text-slate-500">
            {formatDate(post.date)}
          </time>
        )}

        {post.readingTime && (
          <>
            <span className="w-px h-4 bg-white/15" />
            <span className="inline-flex items-center gap-1.5 text-sm text-slate-500">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
                <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {post.readingTime}
            </span>
          </>
        )}
      </div>

      {/* ── Hero image ──────────────────────────── */}
      {post.image && (
        <div className="relative rounded-3xl overflow-hidden border border-white/8 shadow-2xl shadow-black/50 mb-10">
          {/* subtle glow behind image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" />
          <SmartImage
            src={post.image}
            alt={post.title}
            width={1200}
            height={630}
            className="w-full object-cover"
          />
        </div>
      )}

      {/* ── Excerpt ─────────────────────────────── */}
      {(post.excerpt || post.description) && (
        <p className="text-lg sm:text-xl text-slate-400 leading-8 border-l-2 border-purple-500/50 pl-5">
          {post.excerpt || post.description}
        </p>
      )}

    </header>
  );
}
