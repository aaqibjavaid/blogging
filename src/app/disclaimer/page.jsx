export const metadata = {
  title: "Disclaimer",
  description:
    "Read the DevWithAI disclaimer. Information on this site is for general informational purposes only.",
  alternates: { canonical: "/disclaimer" },
  openGraph: {
    title: "Disclaimer | DevWithAI",
    description:
      "Read the DevWithAI disclaimer. Information on this site is for general informational purposes only.",
    url: "https://devwithai.blog/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold mb-8">
        Disclaimer
      </h1>

      <div className="space-y-6 text-slate-300 leading-8">
        <p>
          The information on DevWithAI is published in
          good faith and for general informational
          purposes only.
        </p>

        <p>
          We make no warranties regarding the accuracy,
          reliability, or completeness of information.
        </p>

        <p>
          Any action you take based on information found
          on this website is strictly at your own risk.
        </p>

        <p>
          Some articles may contain affiliate links. We
          may earn a commission at no additional cost to
          you.
        </p>
      </div>
    </main>
  );
}