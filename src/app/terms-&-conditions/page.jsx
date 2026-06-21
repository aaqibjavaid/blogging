import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Read the DevWithAI terms and conditions governing your use of this website and its content.",
  alternates: { canonical: "/terms-&-conditions" },
  openGraph: {
    title: "Terms & Conditions | DevWithAI",
    description:
      "Read the DevWithAI terms and conditions governing your use of this website and its content.",
    url: "https://devwithai.blog/terms-&-conditions",
  },
};

const SECTIONS = [
  {
    icon: "✅",
    title: "Acceptance of Terms",
    content:
      "By accessing or using DevWithAI, you confirm that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree, please discontinue use of this website.",
  },
  {
    icon: "📄",
    title: "Content",
    content:
      "All content published on DevWithAI is provided for informational and educational purposes only. While we strive for accuracy, we make no warranties regarding the completeness, reliability, or suitability of any content for a specific purpose.",
  },
  {
    icon: "©️",
    title: "Intellectual Property",
    content:
      "All articles, graphics, and other materials on DevWithAI are the intellectual property of DevWithAI unless otherwise stated. You may not copy, reproduce, redistribute, or republish any content without prior written permission.",
  },
  {
    icon: "🚫",
    title: "Prohibited Use",
    content:
      "You agree not to use this website for any unlawful purpose, to scrape or harvest content in bulk, to impersonate others, or to engage in any activity that disrupts or interferes with the site's normal operation.",
  },
  {
    icon: "⚠️",
    title: "Limitation of Liability",
    content:
      "DevWithAI and its authors are not liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on any content published here. Use all information at your own risk.",
  },
  {
    icon: "🔗",
    title: "Third-Party Links",
    content:
      "Our content may include links to third-party websites. These links are provided for convenience only. We do not endorse or take responsibility for the content, privacy practices, or terms of any external sites.",
  },
  {
    icon: "✏️",
    title: "Changes to Terms",
    content:
      "We reserve the right to update or modify these Terms & Conditions at any time without prior notice. Continued use of the website after changes are posted constitutes your acceptance of the revised terms.",
  },
  {
    icon: "⚖️",
    title: "Governing Law",
    content:
      "These Terms & Conditions are governed by and construed in accordance with applicable laws. Any disputes arising from these terms shall be resolved through appropriate legal channels.",
  },
];

export default function TermsPage() {
  return (
    <main className="relative overflow-hidden">

      {/* ── Hero ────────────────────────────────── */}
      <section className="relative pt-32 pb-16">

        {/* glow orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-700/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-10 left-0 w-[280px] h-[280px] bg-purple-600/8 blur-[90px] rounded-full pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-xs font-bold text-blue-400 uppercase tracking-widest mb-6">
            ◈ Legal
          </div>

          <h1 className="text-5xl sm:text-6xl font-black leading-[1.1] tracking-tight">
            <span className="text-white">Terms &amp;</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent pb-1">
              Conditions
            </span>
          </h1>

          <p className="max-w-xl mx-auto mt-6 text-slate-400 leading-relaxed">
            By using DevWithAI you agree to the following terms. Please read
            them carefully before continuing to use the site.
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
              className="group relative overflow-hidden rounded-2xl bg-slate-950 border border-white/8 hover:border-blue-500/25 transition-all duration-300 p-7"
            >
              {/* left accent bar on hover */}
              <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-gradient-to-b from-blue-500/60 via-purple-500/60 to-pink-500/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

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

      {/* ── Contact CTA ─────────────────────────── */}
      <section className="relative py-16">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-blue-700/6 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative max-w-2xl mx-auto px-6">
          <div className="relative rounded-3xl bg-slate-950 border border-white/8 p-10 text-center overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 opacity-70" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/8 blur-[50px] rounded-full pointer-events-none" />

            <p className="text-2xl font-black text-white mb-3">Questions about these terms?</p>
            <p className="text-slate-400 text-sm mb-8">
              If anything is unclear or you have concerns, feel free to reach out directly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-semibold text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.03] transition-all duration-200 text-sm"
              >
                Contact Us
                <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
              </Link>
              <Link
                href="/privacy-policy"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/15 text-slate-300 hover:border-purple-500/50 hover:text-white hover:bg-white/5 font-semibold transition-all duration-200 text-sm"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
