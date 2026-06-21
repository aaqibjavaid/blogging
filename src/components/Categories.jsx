import Link from "next/link";

const CATEGORIES = [
  {
    key:         "ai",
    title:       "AI Tools",
    description: "Discover AI tools, prompts, comparisons and productivity workflows for modern developers.",
    link:        "/ai",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3h1V6a4 4 0 0 1 4-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="13" r="1" fill="currentColor"/>
        <circle cx="15" cy="13" r="1" fill="currentColor"/>
        <path d="M9 17c.833.667 5.167.667 6 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    gradient:    "from-violet-600 to-purple-600",
    glow:        "bg-violet-500/10",
    border:      "border-violet-500/20",
    hoverBorder: "hover:border-violet-400/40",
    iconColor:   "text-violet-400",
    badgeColor:  "bg-violet-500/15 text-violet-300",
    countColor:  "text-violet-400",
    arrowColor:  "group-hover:text-violet-400",
  },
  {
    key:         "programming",
    title:       "Programming",
    description: "React, JavaScript, Next.js and modern frontend development guides and deep dives.",
    link:        "/programming",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M8 6L3 12l5 6M16 6l5 6-5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 4l-2 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    gradient:    "from-blue-600 to-cyan-500",
    glow:        "bg-blue-500/10",
    border:      "border-blue-500/20",
    hoverBorder: "hover:border-blue-400/40",
    iconColor:   "text-blue-400",
    badgeColor:  "bg-blue-500/15 text-blue-300",
    countColor:  "text-blue-400",
    arrowColor:  "group-hover:text-blue-400",
  },
  {
    key:         "ai-programming",
    title:       "AI + Code",
    description: "Build AI-powered apps and developer workflows — where AI meets software engineering.",
    link:        "/ai-programming",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    gradient:    "from-pink-600 to-violet-600",
    glow:        "bg-pink-500/10",
    border:      "border-pink-500/20",
    hoverBorder: "hover:border-pink-400/40",
    iconColor:   "text-pink-400",
    badgeColor:  "bg-pink-500/15 text-pink-300",
    countColor:  "text-pink-400",
    arrowColor:  "group-hover:text-pink-400",
  },
];

export default function Categories({ posts = [] }) {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* background glows */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[600px] bg-gradient-to-r from-blue-600/5 via-purple-600/8 to-pink-600/5 blur-[100px] pointer-events-none" />

      {/* top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ── Section header ──────────────────────── */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs font-bold text-purple-400 uppercase tracking-widest mb-5">
            ◈ Browse
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Explore
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Categories</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base max-w-xl mx-auto">
            Learn faster with practical developer-focused content across three core topics
          </p>
        </div>

        {/* ── Category cards ──────────────────────── */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {CATEGORIES.map((cat) => {
            const count = posts.filter((p) => p.category === cat.key).length;

            return (
              <Link
                key={cat.key}
                href={cat.link}
                className={`group relative overflow-hidden rounded-3xl bg-slate-950 border ${cat.border} ${cat.hoverBorder} hover:-translate-y-1 transition-all duration-300 p-8`}
              >
                {/* corner glow */}
                <div className={`absolute -top-10 -right-10 w-40 h-40 ${cat.glow} blur-[60px] rounded-full pointer-events-none group-hover:opacity-150 transition-opacity duration-300`} />

                {/* gradient top bar */}
                <div className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${cat.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* icon */}
                <div className={`w-14 h-14 rounded-2xl ${cat.glow} border ${cat.border} flex items-center justify-center ${cat.iconColor} mb-6`}>
                  {cat.icon}
                </div>

                {/* title + count */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-xl font-black text-white leading-tight">
                    {cat.title}
                  </h3>
                  {count > 0 && (
                    <span className={`flex-shrink-0 mt-0.5 px-2.5 py-1 rounded-full text-xs font-bold ${cat.badgeColor}`}>
                      {count} {count === 1 ? "article" : "articles"}
                    </span>
                  )}
                </div>

                {/* description */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {cat.description}
                </p>

                {/* explore link */}
                <div className={`mt-7 flex items-center gap-1.5 text-sm font-semibold text-slate-500 ${cat.arrowColor} transition-colors duration-200`}>
                  Explore category
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"
                    className="group-hover:translate-x-0.5 transition-transform duration-200">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8"
                      strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
