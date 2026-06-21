const PILLARS = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3h1V6a4 4 0 0 1 4-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="13" r="1" fill="currentColor"/>
        <circle cx="15" cy="13" r="1" fill="currentColor"/>
        <path d="M9 17c.833.667 5.167.667 6 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    title: "AI-First Thinking",
    description: "Every tutorial is built around real AI tools and workflows — not theory. Learn what actually works in production today.",
    glow:        "bg-violet-500/10",
    border:      "border-violet-500/20",
    hoverBorder: "hover:border-violet-400/40",
    iconColor:   "text-violet-400",
    gradient:    "from-violet-600 to-purple-600",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M8 6L3 12l5 6M16 6l5 6-5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 4l-2 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: "Developer-Focused",
    description: "Content written by developers, for developers. No fluff — just practical guides, real code, and honest tool reviews.",
    glow:        "bg-blue-500/10",
    border:      "border-blue-500/20",
    hoverBorder: "hover:border-blue-400/40",
    iconColor:   "text-blue-400",
    gradient:    "from-blue-600 to-cyan-500",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Build Faster",
    description: "From AI-powered apps to modern frontend stacks, we cover the intersection of AI and software engineering — so you ship smarter.",
    glow:        "bg-pink-500/10",
    border:      "border-pink-500/20",
    hoverBorder: "hover:border-pink-400/40",
    iconColor:   "text-pink-400",
    gradient:    "from-pink-600 to-violet-600",
  },
];

export default function WhyDevWithAI() {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* background glows */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[600px] bg-gradient-to-r from-purple-600/5 via-blue-600/8 to-violet-600/5 blur-[100px] pointer-events-none" />

      {/* top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-xs font-bold text-violet-400 uppercase tracking-widest mb-5">
            ◈ About
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Why
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> DevWithAI?</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base max-w-xl mx-auto">
            We help developers learn AI, boost coding productivity, and build modern applications through practical tutorials and real-world examples.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className={`group relative overflow-hidden rounded-3xl bg-slate-950 border ${pillar.border} ${pillar.hoverBorder} hover:-translate-y-1 transition-all duration-300 p-8`}
            >
              {/* corner glow */}
              <div className={`absolute -top-10 -right-10 w-40 h-40 ${pillar.glow} blur-[60px] rounded-full pointer-events-none`} />

              {/* gradient top bar */}
              <div className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${pillar.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* icon */}
              <div className={`w-14 h-14 rounded-2xl ${pillar.glow} border ${pillar.border} flex items-center justify-center ${pillar.iconColor} mb-6`}>
                {pillar.icon}
              </div>

              <h3 className="text-xl font-black text-white leading-tight mb-4">
                {pillar.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}