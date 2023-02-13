import { defineStore } from "pinia";
import { getHomeHotSuggests, getHomeCategories, getHomeHouselist } from "@/services/modules/home";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories: [],
    houselist: [],
    currentPage: 1
  }),
  actions: {
    async fetchHotSuggests() {
      const res = await getHomeHotSuggests()
      this.hotSuggests = res.data
    },
    async fetchCategories() {
      const res = await getHomeCategories()
      this.categories = res.data
    },
    async fetchHouselist() {
      const res = await getHomeHouselist(this.currentPage)
      this.houselist.push(...res.data)
      this.currentPage++
    }
  }
})

export default useHomeStore