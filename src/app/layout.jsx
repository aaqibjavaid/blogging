import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  metadataBase: new URL("https://devwithai.blog"),

  title: {
    default: "DevWithAI",
    template: "%s | DevWithAI",
  },

  description:
    "AI tools, programming tutorials, React guides, and AI-powered development resources.",

  keywords: [
    "AI",
    "Programming",
    "React",
    "Next.js",
    "Artificial Intelligence",
    "Web Development",
    "AI Tools",
    "Frontend Development",
  ],

  authors: [
    {
      name: "Aaqib Javaid",
    },
  ],

  creator: "Aaqib Javaid",

  openGraph: {
    title: "DevWithAI",
    description:
      "AI tools, programming tutorials, and development resources.",
    url: "https://devwithai.blog",
    siteName: "DevWithAI",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DevWithAI",
    description:
      "AI tools, programming tutorials and development resources.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}