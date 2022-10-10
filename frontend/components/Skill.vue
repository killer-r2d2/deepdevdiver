<script setup>
import { ref, onMounted } from "vue";
import qs from "qs";
const config = useRuntimeConfig();
// data
const skills = ref([]);
const page = ref(1);
const pageSize = ref(3);
const hasMoreSkills = ref(true);
const showSkills = ref(false);
const show = ref(false);

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
  <div>
    <div v-if="skills" class="mt-8 mx-auto max-w-sm">
      <h2 class="text-3xl text-center tracking-tight font-bold mb-8">Skills</h2>
      <div v-if="skills">
        <ul class="flex flex-wrap items-center">
          <TransitionGroup name="fade">
            <li
              v-for="skill in skills"
              :key="skill.id"
              class="bg-white text-xs text-secondary mr-4 p-2 mt-4 mb-4"
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
          <li class="mr-4 p-2 mt-4 mb-4 flex">
            <button
              v-if="hasMoreSkills"
              @click="loadMoreSkills"
              type="button"
              aria-label="Load more skills"
              class="text-secondary inline-flex items-center animate-pulse rounded-full border border-transparent bg-white text-slate shadow-sm hover:bg-slate-50 focus:ring-2 focus:ring-slate-300"
            >
              <PlusIcon class="h-4 w-4" aria-hidden="true" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
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
