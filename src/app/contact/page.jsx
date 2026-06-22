import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

const BASE_URL = "https://devwithai.blog";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with DevWithAI for questions, collaborations, sponsorships, or feedback.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | DevWithAI",
    description:
      "Get in touch with DevWithAI for questions, collaborations, sponsorships, or feedback.",
    url: `${BASE_URL}/contact`,
    images: [{ url: "/images/default-blog.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | DevWithAI",
    description:
      "Get in touch with DevWithAI for questions, collaborations, sponsorships, or feedback.",
    images: ["/images/default-blog.png"],
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact | DevWithAI",
  url: `${BASE_URL}/contact`,
  description:
    "Get in touch with DevWithAI for questions, collaborations, sponsorships, or feedback.",
  isPartOf: { "@type": "WebSite", name: "DevWithAI", url: BASE_URL },
};

const CHANNELS = [
  {
    Icon: MdEmail,
    label: "Email",
    value: "contact@devwithai.blog",
    description: "Best for collaborations, sponsorships, and general questions.",
    href: "mailto:contact@devwithai.blog",
    external: false,
    glow: "bg-purple-500/10",
    border: "border-purple-500/20",
    hoverBorder: "hover:border-purple-400/40",
    iconColor: "text-purple-400",
    gradient: "from-purple-600 to-violet-600",
  },
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    value: "Aaqib Javaid",
    description: "Connect professionally or send a direct message.",
    href: "https://linkedin.com/in/aaqib-javaid",
    external: true,
    glow: "bg-blue-500/10",
    border: "border-blue-500/20",
    hoverBorder: "hover:border-blue-400/40",
    iconColor: "text-blue-400",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    Icon: FaXTwitter,
    label: "X / Twitter",
    value: "@devwithai",
    description: "Follow for quick tips, article updates, and AI news.",
    href: "https://x.com/devwithai",
    external: true,
    glow: "bg-slate-500/10",
    border: "border-slate-500/20",
    hoverBorder: "hover:border-slate-400/40",
    iconColor: "text-slate-300",
    gradient: "from-slate-600 to-slate-500",
  },
];

const REASONS = [
  { icon: "💬", text: "General questions or feedback" },
  { icon: "🤝", text: "Collaboration opportunities" },
  { icon: "📢", text: "Sponsorship & partnership inquiries" },
  { icon: "✍️", text: "Guest post or content suggestions" },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
    <main className="relative overflow-hidden">

      {/* ── Hero ────────────────────────────────── */}
      <section className="relative pt-32 pb-16">

        {/* glow orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-700/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-10 left-0 w-[300px] h-[300px] bg-blue-600/8 blur-[90px] rounded-full pointer-events-none" />
        <div className="absolute top-10 right-0 w-[300px] h-[300px] bg-pink-600/8 blur-[90px] rounded-full pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs font-bold text-purple-400 uppercase tracking-widest mb-6">
            ✦ Contact
          </div>

          <h1 className="text-5xl sm:text-6xl font-black leading-[1.1] tracking-tight">
            <span className="text-white">Get In</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent pb-1">
              Touch
            </span>
          </h1>

          <p className="max-w-xl mx-auto mt-6 text-lg text-slate-400 leading-relaxed">
            Have a question, collaboration idea, or sponsorship opportunity?
            Pick the best channel below and I&apos;ll get back to you.
          </p>
        </div>
      </section>

      {/* ── Contact channels ────────────────────── */}
      <section className="relative py-16">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="relative max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {CHANNELS.map(({ Icon, label, value, description, href, external, glow, border, hoverBorder, iconColor, gradient }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`group relative overflow-hidden rounded-3xl bg-slate-950 border ${border} ${hoverBorder} hover:-translate-y-1 transition-all duration-300 p-8 block`}
              >
                {/* corner glow */}
                <div className={`absolute -top-10 -right-10 w-40 h-40 ${glow} blur-[60px] rounded-full pointer-events-none`} />

                {/* gradient top bar */}
                <div className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* icon */}
                <div className={`w-14 h-14 rounded-2xl ${glow} border ${border} flex items-center justify-center ${iconColor} mb-6`}>
                  <Icon size={24} />
                </div>

                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">{label}</p>
                <p className="text-lg font-black text-white mb-3">{value}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>

                <div className={`mt-6 flex items-center gap-1.5 text-sm font-semibold text-slate-500 ${iconColor.replace("text-", "group-hover:text-")} transition-colors duration-200`}>
                  Reach out
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-0.5 transition-transform duration-200">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reasons to reach out ────────────────── */}
      <section className="relative py-16">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[400px] bg-purple-700/5 blur-[100px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-6">
          <div className="relative rounded-3xl bg-slate-950 border border-white/8 p-10 overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 opacity-70" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-500/8 blur-[60px] rounded-full pointer-events-none" />

            <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-6">Reasons to reach out</p>

            <div className="grid sm:grid-cols-2 gap-4">
              {REASONS.map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3 p-4 rounded-2xl bg-white/3 border border-white/6">
                  <span className="text-xl flex-shrink-0">{icon}</span>
                  <span className="text-slate-300 text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-slate-500 text-sm text-center">
              I typically respond within <span className="text-slate-300 font-semibold">1–2 business days</span>.
            </p>
          </div>
        </div>
      </section>

    </main>
    </>
  );
}