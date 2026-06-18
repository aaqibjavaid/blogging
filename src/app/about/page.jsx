export const metadata = {
  title: "About",
  description: "Learn more about DevWithAI.",
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold mb-8">
        About DevWithAI
      </h1>

      <div className="space-y-6 text-slate-1000 leading-8">
        <p>
          DevWithAI is a technology blog focused on
          Artificial Intelligence, Programming, React,
          Next.js, web development, and productivity tools.
        </p>

        <p>
          Our mission is to help developers stay updated
          with modern AI tools, coding techniques, and
          practical tutorials that improve productivity
          and software development workflows.
        </p>

        <p>
          Whether you&apos;re a beginner developer or an
          experienced engineer, you&apos;ll find actionable
          content, comparisons, tutorials, and industry
          insights designed to help you build better
          software.
        </p>

        <p>
          Topics covered include:
        </p>

        <ul className="list-disc pl-6">
          <li>AI Tools & Reviews</li>
          <li>React & Next.js Tutorials</li>
          <li>Frontend Development</li>
          <li>Developer Productivity</li>
          <li>AI-Powered Applications</li>
        </ul>
      </div>
    </main>
  );
}