<script setup>
import qs from "qs";
const config = useRuntimeConfig();
const route = useRoute();
const query = qs.stringify(
  {
    populate: "*",
    filters: {
      slug: {
        $eq: route.params.slug,
      },
    },
  },
  { encodeVluesOnly: true }
);
const url = `${config.public.API_URL}/blogs?${query}`;
const response = await useFetch(url, {
  key: url,
});

const data = response.data.value.data[0];
</script>

<template>
  <div>
    <h1>blog post page</h1>
    <p>{{ data.attributes.title }}</p>
  </div>
</template>
