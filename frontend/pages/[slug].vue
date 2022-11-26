<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import qs from "qs";
const route = useRoute();
const config = useRuntimeConfig();
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

const url = `${config.public.API_URL}/pages?${query}`;
const response = await useFetch(url, {
  key: url,
});

const data = response.data.value.data[0];
</script>

<template>
  <div class="container">
    <div>
      <Disclosure>
        <DisclosureButton class="bg-purple-400 p-2">data</DisclosureButton>
        <DisclosurePanel>
          {{ data }}
        </DisclosurePanel>
      </Disclosure>
    </div>

    hello
  </div>
</template>
