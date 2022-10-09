<script>
import qs from "qs";

export default {
  data() {
    return {
      skills: [],
      page: 1,
      pageSize: 3,
      hasMoreSkills: true,
      showSkills: false,
      show: false,
    };
  },
  mounted() {
    this.loadMoreSkills();
  },

  methods: {
    loadMoreSkills() {
      const query = qs.stringify(
        {
          pagination: {
            page: this.page,
            pageSize: this.pageSize,
          },
        },
        { encodeVluesOnly: true }
      );

      const url = `http://localhost:1337/api/skills?${query}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.skills = this.skills.concat(data.data);
          this.hasMoreSkills =
            data.meta.pagination.page < data.meta.pagination.pageCount;
          this.page++;
        });
    },
  },
};
</script>

<template>
  <div>
    <div v-if="skills" class="mt-8 mx-auto max-w-sm">
      <h2 class="text-3xl text-center tracking-tight font-bold mb-8">Skills</h2>
      <div v-if="skills">
        <ul class="flex flex-wrap justify-center">
          <TransitionGroup name="fade">
            <li
              v-for="skill in skills"
              :key="skill.id"
              class="bg-white text-xs text-secondary w-max p-2 mr-4 mt-4"
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
        </ul>

        <button
          v-if="hasMoreSkills"
          @click="loadMoreSkills"
          type="button"
          aria-label="Load more skills"
          class="text-secondary mt-8 inline-flex items-center rounded-full border border-transparent bg-white p-3 text-slate shadow-sm hover:bg-slate-50 focus:ring-2 focus:ring-slate-300"
        >
          <PlusIcon class="h-6 w-6" aria-hidden="true" />
        </button>
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
