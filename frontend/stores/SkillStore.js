import { defineStore } from "pinia";

export const useSkillStore = defineStore("SkillStore", {
  state: () => ({
    skills: [],
  }),
  actions: {
    async fetchSkills() {
      try {
        const url = "http://localhost:1337/api/skills";
        const response = await fetch(url);
        const skills = await response.json();
        this.skills = skills;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
  },
});
