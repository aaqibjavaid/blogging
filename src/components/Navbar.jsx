"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const NAV_LINKS = [
  { href: "/ai",             label: "AI Tools",    dot: "bg-violet-400" },
  { href: "/programming",    label: "Programming", dot: "bg-blue-400"   },
  { href: "/ai-programming", label: "AI + Code",   dot: "bg-pink-400"   },
  { href: "/blog",           label: "Blog",        dot: "bg-purple-400" },
];

const MOBILE_CATEGORIES = [
  {
    href:        "/ai",
    label:       "AI Tools",
    description: "Tools, prompts & workflows",
    glow:        "bg-violet-500/10",
    border:      "border-violet-500/20",
    dot:         "bg-violet-400",
    gradient:    "from-violet-600 to-purple-600",
    textColor:   "text-violet-400",
  },
  {
    href:        "/programming",
    label:       "Programming",
    description: "React, Next.js & frontend",
    glow:        "bg-blue-500/10",
    border:      "border-blue-500/20",
    dot:         "bg-blue-400",
    gradient:    "from-blue-600 to-cyan-500",
    textColor:   "text-blue-400",
  },
  {
    href:        "/ai-programming",
    label:       "AI + Code",
    description: "Build AI-powered apps",
    glow:        "bg-pink-500/10",
    border:      "border-pink-500/20",
    dot:         "bg-pink-400",
    gradient:    "from-pink-600 to-violet-600",
    textColor:   "text-pink-400",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">

      {/* frosted glass background */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />

      {/* subtle top glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* gradient bottom border */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      {/* ── Desktop bar ──────────────────────────── */}
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-black text-white text-sm shadow-lg shadow-purple-500/30">
            D
          </div>
          <span className="font-black text-lg tracking-tight leading-none">
            <span className="text-white">Dev</span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">WithAI</span>
          </span>
        </Link>

        {/* Center nav links */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ href, label, dot }) => (
            <Link
              key={href}
              href={href}
              className="relative flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 group"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${dot} opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0`} />
              {label}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-3/4 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 rounded-full" />
            </Link>
          ))}
        </nav>

        {/* Right — CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/blog"
            className="hidden md:flex group items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-md shadow-purple-500/25 hover:shadow-purple-500/45 hover:scale-[1.04] transition-all duration-200"
          >
            Start Reading
            <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
          </Link>

          <button
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors duration-150"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ──────────────────────────── */}
      <div
        className={`md:hidden relative transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

        <div className="relative px-5 pt-4 pb-6">

          {/* category cards */}
          <p className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-3 px-1">
            Browse
          </p>
          <div className="grid grid-cols-1 gap-2.5">
            {MOBILE_CATEGORIES.map(({ href, label, description, glow, border, dot, gradient, textColor }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`group relative overflow-hidden flex items-center gap-4 rounded-2xl bg-slate-950 border ${border} hover:border-opacity-60 p-4 transition-all duration-200`}
              >
                {/* gradient top bar */}
                <div className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-200`} />

                <div className={`w-9 h-9 rounded-xl ${glow} border ${border} flex items-center justify-center flex-shrink-0`}>
                  <span className={`w-2 h-2 rounded-full ${dot}`} />
                </div>

                <div className="min-w-0">
                  <p className={`text-sm font-bold text-white`}>{label}</p>
                  <p className="text-xs text-slate-500 truncate">{description}</p>
                </div>

                <svg className={`ml-auto flex-shrink-0 ${textColor} opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200`} width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            ))}
          </div>

          {/* divider */}
          <div className="my-4 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

          {/* secondary links */}
          <div className="flex gap-2 flex-wrap mb-4">
            {[
              { href: "/about",   label: "About"   },
              { href: "/contact", label: "Contact" },
              { href: "/blog",    label: "All Articles" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/5 text-xs font-medium transition-all duration-150"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/blog"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-semibold text-white text-sm shadow-lg shadow-purple-500/20 hover:shadow-purple-500/35 transition-all duration-200"
          >
            Start Reading →
          </Link>
        </div>
      </div>

    </header>
  );
}
