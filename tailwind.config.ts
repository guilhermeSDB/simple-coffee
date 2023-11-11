import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [
    "docs/content/**/*.md",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: "#BEE3CC",
        customYellow: "#F6C768",
        customRed: "#ED735D",
      },
    },
  },
};
