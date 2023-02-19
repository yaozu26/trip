import { defineStore } from "pinia";
import { getDetailData } from "@/services/modules/detail";

const useDetailStore = defineStore("detail", {
  state:() => ({
    detailData: {},
  }),
  actions: {
    async fetchDetailDate(houseId) {
      const res = await getDetailData(houseId)
      this.detailData = res.data
    }
  }
})

export default useDetailStore