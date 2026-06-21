import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const CATEGORIES = [
  { label: "AI Tools",     href: "/ai"             },
  { label: "Programming",  href: "/programming"    },
  { label: "AI + Code",    href: "/ai-programming" },
  { label: "All Articles", href: "/blog"            },
];

const COMPANY = [
  { label: "About",          href: "/about"            },
  { label: "Contact",        href: "/contact"           },
  { label: "Privacy Policy", href: "/privacy-policy"   },
  { label: "Terms",          href: "/terms-&-conditions"},
  { label: "Disclaimer",     href: "/disclaimer"        },
];

const SOCIALS = [
  // { Icon: FaXTwitter,  href: "#", label: "X / Twitter", color: "hover:border-slate-400 hover:text-white"    },
  { Icon: FaGithub,    href: "#", label: "GitHub",       color: "hover:border-violet-400 hover:text-violet-400" },
  { Icon: FaLinkedin,  href: "#", label: "LinkedIn",     color: "hover:border-blue-400 hover:text-blue-400"  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">

      {/* top glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-purple-700/8 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">

        {/* ── Main grid ─────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-14">

          {/* Brand — 5 cols */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block mb-5">
              <span className="text-2xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                DevWithAI
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-7 max-w-xs">
              Practical AI tutorials, honest tool reviews, and real-world
              coding guides — written for developers who want to ship better
              software faster.
            </p>

            {/* social icons */}
            <div className="flex gap-3 mt-8">
              {SOCIALS.map(({ Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-xl border border-white/10 hover:bg-black/5 flex items-center justify-center text-slate-400 transition-all duration-200 ${color}`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Categories — 3 cols */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-5">
              Categories
            </h3>
            <ul className="space-y-3">
              {CATEGORIES.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-slate-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company — 3 cols */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {COMPANY.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-slate-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Bottom bar ────────────────────────── */}
        <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} DevWithAI.blog · All rights reserved.
          </p>
          <p className="text-slate-700 text-xs">
            Built for developers who build with AI.
          </p>
        </div>

      </div>
    </footer>
  );
}
