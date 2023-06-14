import { defineStore } from "pinia";
import { getOrderData } from "@/services/modules/order";

const useOrderStore = defineStore("order", {
  state: () => ({
    orderAllData: [],
    orderRecentData: []
  }),
  actions: {
    async fetchOrderAll() {
      const res = await getOrderData("all")
      this.orderAllData.push(res.data.data.orders)
    },
    async fetchOrderRecent() {
      const res = await getOrderData("recent")
      this.orderRecentData.push(res.data.data.orders)
    }
  }
})

export default useOrderStore