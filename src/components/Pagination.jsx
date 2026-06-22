import Link from "next/link";

export default function Pagination({ currentPage, totalPages, basePath }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const navLink = (page) => `${basePath}?page=${page}`;

  return (
    <div className="flex items-center justify-center gap-2 mt-16">
      {/* Previous */}
      {currentPage > 1 ? (
        <Link
          href={navLink(currentPage - 1)}
          className="flex items-center gap-1 px-4 py-2 rounded-xl border border-slate-700 bg-slate-800/60 text-slate-300 hover:border-purple-500/50 hover:text-purple-300 hover:bg-purple-500/10 transition-all duration-200 text-sm font-medium"
        >
          ← Prev
        </Link>
      ) : (
        <span className="flex items-center gap-1 px-4 py-2 rounded-xl border border-slate-800 bg-slate-800/30 text-slate-600 text-sm font-medium cursor-not-allowed select-none">
          ← Prev
        </span>
      )}

      {/* Page numbers */}
      <div className="flex items-center gap-1">
        {pages.map((page) =>
          page === currentPage ? (
            <span
              key={page}
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-purple-500/50 bg-purple-500/20 text-purple-300 text-sm font-semibold"
            >
              {page}
            </span>
          ) : (
            <Link
              key={page}
              href={navLink(page)}
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-slate-700 bg-slate-800/60 text-slate-400 hover:border-purple-500/40 hover:text-purple-300 hover:bg-purple-500/10 transition-all duration-200 text-sm font-medium"
            >
              {page}
            </Link>
          )
        )}
      </div>

      {/* Next */}
      {currentPage < totalPages ? (
        <Link
          href={navLink(currentPage + 1)}
          className="flex items-center gap-1 px-4 py-2 rounded-xl border border-slate-700 bg-slate-800/60 text-slate-300 hover:border-purple-500/50 hover:text-purple-300 hover:bg-purple-500/10 transition-all duration-200 text-sm font-medium"
        >
          Next →
        </Link>
      ) : (
        <span className="flex items-center gap-1 px-4 py-2 rounded-xl border border-slate-800 bg-slate-800/30 text-slate-600 text-sm font-medium cursor-not-allowed select-none">
          Next →
        </span>
      )}
    </div>
  );
}
