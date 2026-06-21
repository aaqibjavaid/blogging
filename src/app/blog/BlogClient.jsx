"use client";

import { useState } from "react";
import PostCard from "../../components/PostCard";
import SearchBar from "../../components/SearchBar";

const CATEGORIES = [
  { key: "all",            label: "All Articles", color: "text-purple-400", activeBg: "bg-purple-500/15 border-purple-500/40 text-purple-300" },
  { key: "ai",             label: "AI Tools",     color: "text-violet-400", activeBg: "bg-violet-500/15 border-violet-500/40 text-violet-300" },
  { key: "programming",   label: "Programming",  color: "text-blue-400",   activeBg: "bg-blue-500/15 border-blue-500/40 text-blue-300"     },
  { key: "ai-programming", label: "AI + Code",    color: "text-pink-400",   activeBg: "bg-pink-500/15 border-pink-500/40 text-pink-300"     },
];

const POSTS_PER_PAGE = 10;

export default function BlogClient({ posts }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (val) => { setSearchTerm(val); setCurrentPage(1); };
  const handleCategory = (key) => { setActiveCategory(key); setCurrentPage(1); };

  const filtered = posts.filter((post) => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    const q = searchTerm.toLowerCase();
    const matchesSearch =
      !q ||
      (post.title || "").toLowerCase().includes(q) ||
      (post.excerpt || "").toLowerCase().includes(q) ||
      (post.description || "").toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
  const paginated = filtered.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);
  const isSearching = searchTerm.length > 0;

  return (
    <main className="relative overflow-hidden">

      {/* ── Hero ────────────────────────────────── */}
      <section className="relative pt-28 pb-16">

        {/* glow orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-700/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-10 left-0 w-[300px] h-[300px] bg-blue-600/7 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute top-10 right-0 w-[300px] h-[300px] bg-pink-600/7 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs font-bold text-purple-400 uppercase tracking-widest mb-6">
            ✦ All Articles
          </div>

          <h1 className="text-5xl sm:text-6xl font-black leading-[1.1] tracking-tight">
            <span className="text-white">The</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent pb-1">
              DevWithAI Blog
            </span>
          </h1>

          <p className="max-w-xl mx-auto mt-6 text-slate-400 leading-relaxed">
            Practical AI tutorials, honest tool reviews, and real-world
            development guides — all in one place.
          </p>

          {/* stats row */}
          <div className="flex items-center justify-center gap-8 mt-8 flex-wrap">
            {CATEGORIES.slice(1).map(({ key, label, color }) => {
              const count = posts.filter((p) => p.category === key).length;
              return (
                <div key={key} className="text-center">
                  <p className={`text-2xl font-black text-white`}>
                    {count}<span className={color}>+</span>
                  </p>
                  <p className="text-[10px] text-slate-500 mt-0.5 uppercase tracking-widest font-medium">{label}</p>
                </div>
              );
            })}
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <div className="text-center">
              <p className="text-2xl font-black text-white">
                {posts.length}<span className="text-purple-400">+</span>
              </p>
              <p className="text-[10px] text-slate-500 mt-0.5 uppercase tracking-widest font-medium">Total</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Search + Filter ─────────────────────── */}
      <section className="relative py-10">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-6 space-y-5">

          {/* search bar */}
          <SearchBar searchTerm={searchTerm} setSearchTerm={handleSearch} />

          {/* category tabs */}
          <div className="flex items-center gap-2 flex-wrap">
            {CATEGORIES.map(({ key, label, activeBg }) => (
              <button
                key={key}
                onClick={() => handleCategory(key)}
                className={`px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-wide transition-all duration-150 hover:cursor-pointer ${
                  activeCategory === key
                    ? activeBg
                    : "border-white/10 text-slate-500 hover:text-slate-300 hover:border-white/20"
                }`}
              >
                {label}
                <span className="ml-1.5 opacity-60">
                  {key === "all" ? posts.length : posts.filter((p) => p.category === key).length}
                </span>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ── Grid ────────────────────────────────── */}
      <section className="relative pb-20">
        <div className="relative max-w-7xl mx-auto px-6">

          {/* result header */}
          <div className="flex items-center justify-between gap-4 mb-8 max-w-4xl mx-auto lg:max-w-none flex-wrap">
            <p className="text-sm text-slate-500">
              {isSearching ? (
                <>
                  <span className="text-white font-semibold">{filtered.length}</span>
                  {" "}result{filtered.length !== 1 ? "s" : ""} for{" "}
                  <span className="text-purple-400 font-medium">&ldquo;{searchTerm}&rdquo;</span>
                </>
              ) : (
                <>
                  Showing <span className="text-purple-400 font-semibold">{filtered.length}</span> articles
                  {activeCategory !== "all" && (
                    <> in <span className="text-purple-400 font-medium">{CATEGORIES.find(c => c.key === activeCategory)?.label}</span></>
                  )}
                </>
              )}
            </p>

            {(isSearching || activeCategory !== "all") && (
              <button
                onClick={() => { handleSearch(""); handleCategory("all"); }}
                className="text-xs text-slate-500 hover:text-purple-400 flex items-center gap-1.5 transition-colors duration-150 cursor-pointer"
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 2l6 6M8 2L2 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
                Clear filters
              </button>
            )}
          </div>

          {/* posts */}
          {filtered.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginated.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>

              {/* pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-3 mt-14 flex-wrap">
                  <button
                    onClick={() => { setCurrentPage((p) => p - 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    disabled={currentPage === 1}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-purple-500/40 hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-150 text-sm font-medium"
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Previous
                  </button>

                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                      <button
                        key={p}
                        onClick={() => { setCurrentPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                        className={`w-9 h-9 rounded-lg text-sm font-bold transition-all duration-150 ${
                          p === currentPage
                            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md shadow-purple-500/25"
                            : "text-slate-500 hover:text-white hover:bg-white/5 border border-white/8"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => { setCurrentPage((p) => p + 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-purple-500/40 hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-150 text-sm font-medium"
                  >
                    Next
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-24">
              <p className="text-4xl mb-4">🔍</p>
              <p className="text-white font-semibold text-lg mb-2">
                No articles found
              </p>
              <p className="text-slate-500 text-sm mb-6">
                Try a different keyword or browse a category above.
              </p>
              <button
                onClick={() => { handleSearch(""); handleCategory("all"); }}
                className="px-6 py-3 rounded-xl border border-white/15 text-slate-300 hover:border-purple-500/50 hover:text-white hover:bg-white/5 text-sm font-semibold transition-all duration-200"
              >
                View all articles
              </button>
            </div>
          )}
        </div>
      </section>

    </main>
  );
}
