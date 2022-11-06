<script setup>
// import md from "markdown-it";
const md = useMarkdownRenderer();
const props = defineProps({
  data: {
    DEFAULT: null,
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div>
    <div class="grid h-screen place-items-center" id="header">
      <div class="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1
            class="mt-1 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            <!-- {{ data.title }} -->
          </h1>

          <div
            class="content mx-auto mt-5 mb-8 max-w-xl text-xl"
            v-html="md.render(data.lead)"
          ></div>

          <div class="flex justify-evenly"><Socials /></div>
        </div>
      </div>
    </div>
  </div>
</template>
