<script setup>
import qs from "qs";
import HomeHeroBlock from "~/components/blocks/HomeHeroBlock.vue";
const foo = useFoo();
const config = useRuntimeConfig();
const apiUrl = config.public.API_URL;
const query = qs.stringify(
  {
    populate: "*",
  },
  { encodeVluesOnly: true }
);

// usefetch
const { data } = useFetch(`${apiUrl}/home?${query}`);
</script>

<template>
  <div>
    <p>{{ foo }}</p>
    <HomeHeroBlock :data="data?.data?.attributes?.hero" />
  </div>
</template>
