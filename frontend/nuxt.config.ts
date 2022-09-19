import { defineNuxtConfig } from "nuxt";

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
    // Private config that is only available on the server
    apiSecret: process.env.API_SECRET || "http://localhost:1337/api",
    // Config within public will be also exposed to the client
  },
});
