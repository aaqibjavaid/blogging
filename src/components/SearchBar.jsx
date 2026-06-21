"use client";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="w-full">
      <div className="relative group">
        {/* glow ring on focus */}
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-focus-within:opacity-60 transition-opacity duration-300 blur-sm pointer-events-none" />

        <div className="relative flex items-center bg-slate-950 border border-white/10 group-focus-within:border-purple-500/40 rounded-2xl overflow-hidden transition-colors duration-200">

          {/* search icon */}
          <svg
            className="ml-5 flex-shrink-0 text-slate-500 group-focus-within:text-purple-400 transition-colors duration-200"
            width="18" height="18" viewBox="0 0 24 24" fill="none"
          >
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>

          <input
            type="text"
            placeholder="Search articles, topics, tools..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-transparent px-4 py-4 text-white placeholder:text-slate-600 text-sm outline-none"
          />

          {/* clear button */}
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="mr-4 flex-shrink-0 w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-150"
              aria-label="Clear search"
            >
              <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                <path d="M2 2l6 6M8 2L2 8" stroke="#94a3b8" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
