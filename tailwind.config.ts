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
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === "production"
          ? { preset: ["default", { discardComments: { removeAll: true } }] }
          : false, // disable cssnano when not in production
    },
  },
};
