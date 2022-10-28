<script setup>
useHead({
  title: "deepdediver",
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    {
      name: "description",
      content: "This is the home page",
    },
  ],
  link: [
    {
      rel: "icon",
      href: "/diver-helmet-48.png",
      type: "image/x-icon",
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
