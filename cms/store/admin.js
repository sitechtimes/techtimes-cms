import { defineStore } from "pinia";

export const useAdminsStore = defineStore("admin", {
  state: () => ({
    // your data goes here
    alerts: [],
  }),

  actions: {},
});
