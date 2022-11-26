<script setup>
import qs from "qs";
import HomeHeroBlock from "~/components/blocks/HomeHeroBlock.vue";
const config = useRuntimeConfig();
const apiUrl = config.public.API_URL;
const query = qs.stringify(
  {
    populate: "*",
  },
  { encodeVluesOnly: true }
);

// usefetch
const { data } = await useFetch(`${apiUrl}/home?${query}`);
</script>

<template>
  <div>
    <HomeHeroBlock :data="data?.data?.attributes?.hero" />
  </div>
</template>
