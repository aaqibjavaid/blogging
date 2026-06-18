import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-7xl font-bold">
        404
      </h1>

      <p className="text-slate-400 mt-4">
        The page you@aposre looking for doesn@apost exist.
      </p>

      <Link
        href="/"
        className="
          mt-8
          px-6
          py-3
          rounded-xl
          bg-purple-600
        "
      >
        Go Home
      </Link>
    </div>
  );
}