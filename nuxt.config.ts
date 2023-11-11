// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
  ],
  alias: {
    assets: "/<rootDir>/assets",
    components: "/<rootDir>/components",
  },
  googleFonts: {
    families: {
      "DM Sans": [100, 200, 300, 400, 500, 600, 700],
    },
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },
});
