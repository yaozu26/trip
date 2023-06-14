<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia';
import useOrderStore from '@/stores/modules/order'
import orderItem from '@/components/order-item/order-item.vue';

const titles = ["全部订单", "近期订单", "待支付"]
const tabActive = ref()

const orderStore = useOrderStore()
orderStore.fetchOrderAll()
orderStore.fetchOrderRecent()

const { orderAllData, orderRecentData } = storeToRefs(orderStore)

</script>
<template>
  <div class="nav-bar">
    <van-tabs v-model:active="tabActive">
      <template v-for="(item, index) in titles" :key="index">
        <van-tab :title="item" :name="item"></van-tab>
      </template>
    </van-tabs>
    <div class="content">
        <div class="item" v-if="tabActive===titles[0]">
          <template v-for="(iten,indey) in orderAllData[0]" v-key="indey">
            <orderItem :itemData="iten"/>
          </template>
        </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.nav-bar {
  .van-tabs {
    position: fixed;
    z-index: 999;
    left: 0;
    right: 0;
    top: 49px;
  }
  .content {
    margin-top: 100px;
  }
}
</style>
