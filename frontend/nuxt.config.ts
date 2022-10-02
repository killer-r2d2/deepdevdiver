// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  buildModules: ["@pinia/nuxt"],

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
      NUXT_API_SECRET: process.env.NUXT_API_SECRET,
    },
  },
});
