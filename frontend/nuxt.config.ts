// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },

  build: {
    transpile: ["@headlessui/vue", "@heroicons/vue"],
  },

  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL,
    },
  },
});
