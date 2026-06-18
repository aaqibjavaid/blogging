export default function manifest() {
  return {
    name: "DevWithAI",

    short_name: "DevWithAI",

    description:
      "AI tools, programming tutorials and development resources.",

    start_url: "/",

    display: "standalone",

    background_color: "#020617",

    theme_color: "#7c3aed",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}