<script setup>
const config = useRuntimeConfig();

const { data: skills } = await useFetch(
  `${config.public.NUXT_API_SECRET}/skills`
);
</script>

<template>
  <div v-if="skills" class="mt-8 mx-auto max-w-sm">
    <h2 class="text-3xl text-center tracking-tight font-bold mb-8">Skills</h2>
    <ul class="flex flex-wrap justify-center">
      <li
        v-for="skill in skills.data"
        :key="skill.id"
        class="bg-white text-xs text-secondary w-max p-2 mr-4 mt-4"
      >
        <a
          v-if="skill.attributes.url !== null"
          :href="skill.attributes.url"
          target="_blank"
          >{{ skill.attributes.title }}</a
        >
        <span v-else>{{ skill.attributes.title }}</span>
      </li>
    </ul>
  </div>
</template>
