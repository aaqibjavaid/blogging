import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Read the DevWithAI privacy policy to understand how we collect, use, and protect your information.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | DevWithAI",
    description:
      "Read the DevWithAI privacy policy to understand how we collect, use, and protect your information.",
    url: "https://devwithai.blog/privacy-policy",
  },
};

const SECTIONS = [
  {
    icon: "📋",
    title: "Information We Collect",
    content:
      "We may collect information you voluntarily provide through contact forms or newsletter subscriptions, such as your name and email address. We do not sell or share this information with third parties for marketing purposes.",
  },
  {
    icon: "🍪",
    title: "Cookies",
    content:
      "This website may use cookies to improve user experience and analyze website traffic. Cookies are small data files stored on your device. You can disable cookies through your browser settings, though this may affect some site functionality.",
  },
  {
    icon: "🔗",
    title: "Third-Party Services",
    content:
      "We may use third-party services such as Google Analytics to understand how visitors interact with our site, and Google AdSense to display relevant advertisements. These services have their own privacy policies governing data use.",
  },
  {
    icon: "🔒",
    title: "Data Security",
    content:
      "We take reasonable precautions to protect your information. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of any information transmitted to or stored on our site.",
  },
  {
    icon: "🔗",
    title: "External Links",
    content:
      "Our articles may contain links to external websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policy of any site you visit.",
  },
  {
    icon: "✏️",
    title: "Policy Updates",
    content:
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. Continued use of the site after changes constitutes acceptance of the updated policy.",
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="relative overflow-hidden">

      {/* ── Hero ────────────────────────────────── */}
      <section className="relative pt-32 pb-16">

        {/* glow orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-purple-700/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-10 right-0 w-[280px] h-[280px] bg-blue-600/8 blur-[90px] rounded-full pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs font-bold text-purple-400 uppercase tracking-widest mb-6">
            ◈ Legal
          </div>

          <h1 className="text-5xl sm:text-6xl font-black leading-[1.1] tracking-tight">
            <span className="text-white">Privacy</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent pb-1">
              Policy
            </span>
          </h1>

          <p className="max-w-xl mx-auto mt-6 text-slate-400 leading-relaxed">
            We respect your privacy and are committed to protecting your personal
            information. This policy explains what we collect and how we use it.
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
              className="group relative overflow-hidden rounded-2xl bg-slate-950 border border-white/8 hover:border-purple-500/25 transition-all duration-300 p-7"
            >
              {/* subtle left accent bar */}
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
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-purple-700/6 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative max-w-2xl mx-auto px-6">
          <div className="relative rounded-3xl bg-slate-950 border border-white/8 p-10 text-center overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 opacity-70" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/8 blur-[50px] rounded-full pointer-events-none" />

            <p className="text-2xl font-black text-white mb-3">Questions about this policy?</p>
            <p className="text-slate-400 text-sm mb-8">
              If you have any questions regarding this Privacy Policy, feel free to reach out directly.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-semibold text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.03] transition-all duration-200 text-sm"
            >
              Contact Us
              <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
