import { defineStore } from "pinia";

export const useAdminsStore = defineStore("admin", {
  state: () => ({
    categories: [],
    selectedCategory: null,
  }),
  actions: {
    async fetchCategories() {
      const response = await axios.get("cms/categories");
      this.categories = response.data;
    },
  },
});
