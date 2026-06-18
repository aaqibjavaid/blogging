export default function Newsletter() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24 text-center">
      <h2 className="text-4xl font-bold">
        Stay Updated
      </h2>

      <p className="mt-4 text-slate-400">
        Get the latest AI tools, tutorials, and developer insights.
      </p>

      <form className="mt-8 flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="
            flex-1
            bg-slate-100
            px-5
            py-4
            rounded-xl
            outline-none
          "
        />

        <button
          className="
            px-8
            py-4
            rounded-xl
            bg-gradient-to-r
            from-blue-500
            to-purple-600
          "
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}