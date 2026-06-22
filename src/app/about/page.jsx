import Link from "next/link";

const BASE_URL = "https://devwithai.blog";

export const metadata = {
  title: "About",
  description:
    "DevWithAI is a blog for developers covering AI tools, React, Next.js, and modern software development workflows.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | DevWithAI",
    description:
      "DevWithAI is a blog for developers covering AI tools, React, Next.js, and modern software development workflows.",
    url: `${BASE_URL}/about`,
    images: [{ url: "/images/default-blog.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | DevWithAI",
    description:
      "DevWithAI is a blog for developers covering AI tools, React, Next.js, and modern software development workflows.",
    images: ["/images/default-blog.png"],
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About | DevWithAI",
  url: `${BASE_URL}/about`,
  description:
    "DevWithAI is a blog for developers covering AI tools, React, Next.js, and modern software development workflows.",
  isPartOf: { "@type": "WebSite", name: "DevWithAI", url: BASE_URL },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aaqib Javaid",
  url: `${BASE_URL}/about`,
  sameAs: [
    "https://x.com/devwithai",
    "https://linkedin.com/in/aaqib-javaid",
  ],
};

const TOPICS = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3h1V6a4 4 0 0 1 4-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="13" r="1" fill="currentColor"/>
        <circle cx="15" cy="13" r="1" fill="currentColor"/>
        <path d="M9 17c.833.667 5.167.667 6 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    title: "AI Tools & Reviews",
    description: "Honest breakdowns of the AI tools developers actually use — from coding assistants to LLM APIs and productivity workflows.",
    glow: "bg-violet-500/10",
    border: "border-violet-500/20",
    hoverBorder: "hover:border-violet-400/40",
    iconColor: "text-violet-400",
    gradient: "from-violet-600 to-purple-600",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M8 6L3 12l5 6M16 6l5 6-5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 4l-2 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: "React & Next.js",
    description: "Deep-dive tutorials on React, Next.js, and modern frontend development — written for engineers who want to ship real products.",
    glow: "bg-blue-500/10",
    border: "border-blue-500/20",
    hoverBorder: "hover:border-blue-400/40",
    iconColor: "text-blue-400",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "AI-Powered Apps",
    description: "Practical guides on building AI-integrated applications — RAG pipelines, chatbots, agents, and the APIs that power them.",
    glow: "bg-pink-500/10",
    border: "border-pink-500/20",
    hoverBorder: "hover:border-pink-400/40",
    iconColor: "text-pink-400",
    gradient: "from-pink-600 to-violet-600",
  },
];

const STATS = [
  { value: "3",    suffix: "×",  label: "Categories",     color: "text-blue-400"   },
  { value: "100",  suffix: "%",  label: "Free Forever",   color: "text-purple-400" },
  { value: "0",    suffix: "",   label: "Paywalls",       color: "text-pink-400"   },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    <main className="relative overflow-hidden">

      {/* ── Hero ──────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">

        {/* glow orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-700/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-10 left-0 w-[350px] h-[350px] bg-blue-600/8 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute top-10 right-0 w-[350px] h-[350px] bg-pink-600/8 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs font-bold text-purple-400 uppercase tracking-widest mb-6">
            ◈ About
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.1] tracking-tight">
            <span className="text-white">Built for</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent pb-1">
              Developers
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mt-7 text-lg text-slate-400 leading-relaxed">
            DevWithAI is a developer-focused blog covering AI tools, React, Next.js,
            and AI-powered application development — practical tutorials with zero fluff.
          </p>

          {/* stats */}
          <div className="flex items-center justify-center gap-10 sm:gap-16 mt-14 flex-wrap">
            {STATS.map(({ value, suffix, label, color }) => (
              <div key={label} className="text-center">
                <p className={`text-4xl font-black text-white`}>
                  {value}<span className={color}>{suffix}</span>
                </p>
                <p className="text-[11px] text-slate-500 mt-1 uppercase tracking-widest font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission ───────────────────────────────── */}
      <section className="relative py-16">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-3xl mx-auto px-6">
          <div className="relative rounded-3xl bg-slate-950 border border-white/8 p-10 overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-500/10 blur-[60px] rounded-full pointer-events-none" />
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 opacity-70" />

            <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-4">Our Mission</p>
            <p className="text-xl sm:text-2xl font-semibold text-white leading-relaxed">
              Help developers learn AI, boost coding productivity, and build modern
              applications through practical tutorials and real-world examples —
              completely free.
            </p>
            <p className="mt-5 text-slate-400 leading-7">
              Whether you&apos;re a beginner or a seasoned engineer, every article on
              DevWithAI is written to be immediately actionable — not just theory.
              We cover the intersection of AI and software engineering so you can
              build smarter and ship faster.
            </p>
          </div>
        </div>
      </section>

      {/* ── Topics ────────────────────────────────── */}
      <section className="relative py-20">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[500px] bg-gradient-to-r from-blue-600/4 via-purple-600/6 to-pink-600/4 blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-xs font-bold text-blue-400 uppercase tracking-widest mb-5">
              ✦ What We Cover
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Three Core
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Topics</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {TOPICS.map((topic) => (
              <div
                key={topic.title}
                className={`group relative overflow-hidden rounded-3xl bg-slate-950 border ${topic.border} ${topic.hoverBorder} hover:-translate-y-1 transition-all duration-300 p-8`}
              >
                <div className={`absolute -top-10 -right-10 w-40 h-40 ${topic.glow} blur-[60px] rounded-full pointer-events-none`} />
                <div className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${topic.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className={`w-14 h-14 rounded-2xl ${topic.glow} border ${topic.border} flex items-center justify-center ${topic.iconColor} mb-6`}>
                  {topic.icon}
                </div>
                <h3 className="text-xl font-black text-white leading-tight mb-3">{topic.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────── */}
      <section className="relative py-20">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-700/8 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-5">
            Ready to start
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> learning?</span>
          </h2>
          <p className="text-slate-400 mb-10">
            Dive into our library of practical AI and development tutorials.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/blog"
              className="group px-9 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-semibold text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.03] transition-all duration-200"
            >
              Browse All Articles
              <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
            <Link
              href="/ai"
              className="px-9 py-4 rounded-xl border border-white/15 text-slate-300 hover:border-purple-500/50 hover:text-white hover:bg-white/5 font-semibold transition-all duration-200"
            >
              Explore AI Tools
            </Link>
          </div>
        </div>
      </section>

    </main>
    </>
  );
}