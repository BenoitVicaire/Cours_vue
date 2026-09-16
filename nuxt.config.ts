import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-01-01",
  devtools: { enabled: true },
  css: ["~/assets/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: "Cours Vue",
      meta: [
        { charset: "UTF-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      ],
      link: [{ rel: "icon", href: "/favicon.ico" }],
    },
  },
});
