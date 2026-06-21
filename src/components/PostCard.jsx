import Link from "next/link";
import SmartImage from "./SmartImage";

const CATEGORY_META = {
  ai: {
    label: "AI",
    badge: "bg-violet-600",
    hoverTitle: "group-hover:text-violet-600",
    hoverBorder: "group-hover:border-violet-200",
    accent: "from-violet-500 to-violet-400",
  },
  programming: {
    label: "Programming",
    badge: "bg-blue-600",
    hoverTitle: "group-hover:text-blue-600",
    hoverBorder: "group-hover:border-blue-200",
    accent: "from-blue-500 to-cyan-400",
  },
  "ai-programming": {
    label: "AI + Programming",
    badge: "bg-gradient-to-r from-blue-600 to-violet-600",
    hoverTitle: "group-hover:text-violet-600",
    hoverBorder: "group-hover:border-violet-200",
    accent: "from-blue-500 to-violet-500",
  },
};

function formatDate(str) {
  if (!str) return "";
  const [y, m, d] = str.split("-");
  const months = ["Jan","Feb","Mar","Apr","May","Jun",
                  "Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${months[+m - 1]} ${+d}, ${y}`;
}

function isRecent(dateStr) {
  if (!dateStr) return false;
  return Date.now() - new Date(dateStr).getTime() < 7 * 24 * 60 * 60 * 1000;
}

export default function PostCard({ post }) {
  const meta = CATEGORY_META[post.category] ?? {
    label: post.category,
    badge: "bg-violet-600",
    hoverTitle: "group-hover:text-violet-600",
    hoverBorder: "group-hover:border-violet-200",
    accent: "from-violet-500 to-violet-400",
  };

  const fresh = isRecent(post.date);

  return (
    <Link href={`/blog/${post.category}/${post.slug}`} className="group block h-full">
      <article className={`
        flex flex-col h-full
        bg-white rounded-2xl overflow-hidden
        border border-slate-100 shadow-md
        ${meta.hoverBorder}
        hover:shadow-2xl hover:-translate-y-1
        transition-all duration-300 ease-out
      `}>

        {/* ── Image ─────────────────────────────── */}
        <div className="relative aspect-video overflow-hidden flex-shrink-0">
          <SmartImage
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out"
          />

          {/* minimal top scrim for badge legibility only */}
          <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-black/40 to-transparent" />

          {/* badges row */}
          <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`
                ${meta.badge} px-3 py-1
                rounded-full text-xs font-semibold text-white tracking-wide shadow-md
              `}>
                {meta.label}
              </span>
              {fresh && (
                <span className="bg-emerald-500 px-2.5 py-1 rounded-full text-xs font-semibold text-white shadow-md">
                  New
                </span>
              )}
            </div>
            {post.featured && (
              <span className="bg-amber-500 px-2.5 py-1 rounded-full text-xs font-semibold text-white shadow-md flex-shrink-0">
                ★ Featured
              </span>
            )}
          </div>
        </div>

        {/* ── Body ──────────────────────────────── */}
        <div className="flex flex-col flex-1 p-5 sm:p-6">

          {/* date · reading time */}
          <div className="flex items-center gap-2 flex-wrap">
            <time className="text-xs text-slate-400 font-medium">
              {formatDate(post.date)}
            </time>
            {post.readingTime && (
              <>
                <span className="text-slate-300 select-none">·</span>
                <span className="text-xs text-slate-400 font-medium">
                  {post.readingTime}
                </span>
              </>
            )}
          </div>

          {/* title */}
          <h3 className={`
            mt-2.5 text-base sm:text-lg font-bold leading-snug
            text-slate-900 ${meta.hoverTitle}
            transition-colors duration-200 line-clamp-2
          `}>
            {post.title}
          </h3>

          {/* excerpt */}
          {(post.excerpt || post.description) && (
            <p className="mt-2 text-sm text-slate-500 leading-relaxed line-clamp-2">
              {post.excerpt || post.description}
            </p>
          )}

          {/* ── Footer ────────────────────────────── */}
          <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex-shrink-0" />
              <span className="text-xs text-slate-500 font-medium truncate">
                {post.author || "DevWithAI"}
              </span>
            </div>

            <span className="
              flex items-center gap-1 flex-shrink-0
              text-xs font-bold text-violet-600
              group-hover:text-violet-700 transition-colors duration-200
            ">
              Read Article
              <svg
                width="13" height="13" viewBox="0 0 16 16" fill="none"
                className="group-hover:translate-x-0.5 transition-transform duration-200"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>

      </article>
    </Link>
  );
}
