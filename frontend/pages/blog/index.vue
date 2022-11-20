<script setup>
const config = useRuntimeConfig();
const url = config.public.API_URL;
const { data } = await useFetch(`${url}/blogs`);
</script>

<template>
  <div class="h-screen">
    <h1>blog page</h1>
    <ul>
      <li v-for="post in data.data" :key="post.id">
        <NuxtLink :to="`/blog/${post.attributes.slug}`">
          {{ post.attributes.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
