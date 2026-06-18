import Link from "next/link";

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
}) {
  return (
    <div className="flex justify-center gap-4 mt-16">
      {currentPage > 1 && (
        <Link
          href={`${basePath}?page=${
            currentPage - 1
          }`}
          className="
            px-5 py-3
            rounded-xl
            bg-slate-900
          "
        >
          Previous
        </Link>
      )}

      <span className="px-5 py-3">
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages && (
        <Link
          href={`${basePath}?page=${
            currentPage + 1
          }`}
          className="
            px-5 py-3
            rounded-xl
            bg-slate-900
          "
        >
          Next
        </Link>
      )}
    </div>
  );
}