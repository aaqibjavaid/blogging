export const metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold mb-8">
        Terms & Conditions
      </h1>

      <div className="space-y-6 text-slate-1000 leading-8">
        <p>
          By accessing DevWithAI, you agree to these
          terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold">
          Content
        </h2>

        <p>
          All content is provided for informational and
          educational purposes only.
        </p>

        <h2 className="text-2xl font-semibold">
          Intellectual Property
        </h2>

        <p>
          Content published on DevWithAI may not be
          copied or redistributed without permission.
        </p>

        <h2 className="text-2xl font-semibold">
          Limitation of Liability
        </h2>

        <p>
          We are not liable for any losses or damages
          arising from the use of this website.
        </p>
      </div>
    </main>
  );
}