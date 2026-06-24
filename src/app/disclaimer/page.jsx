import Link from "next/link";

export const metadata = {
  title: "Disclaimer",
  description:
    "Read the DevWithAI disclaimer. Information on this site is for general informational purposes only.",
  alternates: { canonical: "/disclaimer" },
  openGraph: {
    title: "Disclaimer | DevWithAI",
    description:
      "Read the DevWithAI disclaimer. Information on this site is for general informational purposes only.",
    url: "https://devwithai.blog/disclaimer",
    images: [{ url: "https://devwithai.blog/images/default-blog.png", width: 1200, height: 630, alt: "DevWithAI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer | DevWithAI",
    description:
      "Read the DevWithAI disclaimer. Information on this site is for general informational purposes only.",
    images: ["https://devwithai.blog/images/default-blog.png"],
  },
};

const SECTIONS = [
  {
    icon: "📢",
    title: "General Information Only",
    content:
      "All content published on DevWithAI is intended for general informational and educational purposes only. It does not constitute professional advice of any kind — technical, legal, financial, or otherwise. Always consult a qualified professional before making decisions based on anything you read here.",
  },
  {
    icon: "🎯",
    title: "Accuracy of Information",
    content:
      "We make every effort to ensure the information on this site is accurate and up to date. However, we make no warranties or representations — express or implied — regarding the completeness, reliability, or suitability of any content for any particular purpose.",
  },
  {
    icon: "⚠️",
    title: "Use at Your Own Risk",
    content:
      "Any action you take based on information found on DevWithAI is strictly at your own risk. We will not be liable for any losses or damages — direct or indirect — in connection with the use of this website or reliance on its content.",
  },
  {
    icon: "💰",
    title: "Affiliate Links",
    content:
      "Some articles on DevWithAI may contain affiliate links. If you click one and make a purchase, we may earn a small commission at no additional cost to you. We only recommend tools and products we genuinely believe are useful for developers.",
  },
  {
    icon: "🔗",
    title: "External Links",
    content:
      "This site may link to external websites for reference or additional reading. We do not control the content or availability of those sites and are not responsible for any information, products, or services they provide.",
  },
  {
    icon: "✏️",
    title: "Changes to This Disclaimer",
    content:
      "We reserve the right to modify this Disclaimer at any time. Updates will be reflected on this page. Your continued use of DevWithAI after any changes constitutes acceptance of the revised Disclaimer.",
  },
];

export default function DisclaimerPage() {
  return (
    <main className="relative overflow-hidden">

      {/* ── Hero ────────────────────────────────── */}
      <section className="relative pt-32 pb-16">

        {/* glow orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-pink-700/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-10 right-0 w-[280px] h-[280px] bg-violet-600/8 blur-[90px] rounded-full pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/25 text-xs font-bold text-pink-400 uppercase tracking-widest mb-6">
            ◈ Legal
          </div>

          <h1 className="text-5xl sm:text-6xl font-black leading-[1.1] tracking-tight">
            <span className="text-white">Our</span>
            <span className="block mt-2 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent pb-1">
              Disclaimer
            </span>
          </h1>

          <p className="max-w-xl mx-auto mt-6 text-slate-400 leading-relaxed">
            Please read this disclaimer carefully before using DevWithAI.
            It outlines the limitations of the information we provide.
          </p>

          <p className="mt-4 text-xs text-slate-600 font-medium">
            Last updated: June 2026
          </p>
        </div>
      </section>

      {/* ── Sections ────────────────────────────── */}
      <section className="relative py-16">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="relative max-w-3xl mx-auto px-6 space-y-5">
          {SECTIONS.map(({ icon, title, content }, i) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl bg-slate-950 border border-white/8 hover:border-pink-500/25 transition-all duration-300 p-7"
            >
              {/* left accent bar on hover */}
              <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-gradient-to-b from-pink-500/60 via-purple-500/60 to-blue-500/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-xl flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-slate-600">0{i + 1}</span>
                    <h2 className="text-lg font-black text-white">{title}</h2>
                  </div>
                  <p className="text-slate-400 text-sm leading-7">{content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────── */}
      <section className="relative py-16">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-pink-700/6 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative max-w-2xl mx-auto px-6">
          <div className="relative rounded-3xl bg-slate-950 border border-white/8 p-10 text-center overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-pink-600 via-purple-500 to-blue-600 opacity-70" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-500/8 blur-[50px] rounded-full pointer-events-none" />

            <p className="text-2xl font-black text-white mb-3">Have a question?</p>
            <p className="text-slate-400 text-sm mb-8">
              If you have any concerns about this disclaimer or any content on DevWithAI, we&apos;re happy to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 font-semibold text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.03] transition-all duration-200 text-sm"
              >
                Contact Us
                <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
              </Link>
              <Link
                href="/terms-and-conditions"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/15 text-slate-300 hover:border-purple-500/50 hover:text-white hover:bg-white/5 font-semibold transition-all duration-200 text-sm"
              >
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
