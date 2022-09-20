<script setup>
const config = useRuntimeConfig();

const { data: skills } = await useFetch(`${config.apiSecret}/skills`);
</script>

<template>
  <div v-if="skills" class="mt-8">
    <h2 class="text-3xl text-center tracking-tight font-bold mb-8">Skills</h2>
    <ul class="flex flex-wrap justify-center">
      <li
        v-for="skill in skills.data"
        :key="skill.id"
        class="bg-white text-secondary w-max p-2 mr-4 mt-4"
      >
        {{ skill.attributes.skill }}
      </li>
    </ul>
  </div>
</template>
