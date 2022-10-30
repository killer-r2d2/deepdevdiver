<script setup>
import { ref, onMounted } from "vue";
import qs from "qs";
const config = useRuntimeConfig();
// data
const skills = ref([]);
const page = ref(1);
const pageSize = ref(3);
const hasMoreSkills = ref(true);

onMounted(() => {
  loadMoreSkills();
});

const loadMoreSkills = () => {
  const query = qs.stringify(
    {
      pagination: {
        page: page.value,
        pageSize: pageSize.value,
      },
    },
    { encodeVluesOnly: true }
  );

  const url = `${config.public.NUXT_API_SECRET}/skills?${query}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      skills.value = skills.value.concat(data.data);
      hasMoreSkills.value =
        data.meta.pagination.page < data.meta.pagination.pageCount;
      page.value++;
    });
};
</script>

<template>
  <section class="h-screen">
    <div class="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div v-if="skills" class="mx-auto mt-8 max-w-sm">
        <h2
          class="mb-8 text-start text-3xl font-bold tracking-tight"
          id="skills"
        >
          Skills
        </h2>
        <div v-if="skills">
          <ul class="flex flex-wrap items-center">
            <TransitionGroup name="fade">
              <li
                v-for="skill in skills"
                :key="skill.id"
                class="mr-4 mt-4 mb-4 bg-white p-2 text-xs"
              >
                <a
                  v-if="skill.attributes.url !== null"
                  :href="skill.attributes.url"
                  target="_blank"
                  >{{ skill.attributes.title }}</a
                >
                <p v-else>{{ skill.attributes.title }}</p>
              </li>
            </TransitionGroup>
            <li class="mr-4 mt-4 mb-4 flex p-2">
              <button
                v-if="hasMoreSkills"
                @click="loadMoreSkills"
                type="button"
                aria-label="Load more skills"
                class="text-slate inline-flex items-center rounded-full border border-transparent bg-white shadow-sm hover:bg-slate-50 focus:ring-2 focus:ring-slate-300"
              >
                <PlusIcon class="h-4 w-4" aria-hidden="true" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
