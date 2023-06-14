<script setup>
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import useMainStore from '@/stores/modules/main';
import homeItemV3 from './home-item-v3.vue';
import homeItemV9 from './home-item-v9.vue';

defineProps({
  houselist: {
    type: Array,
    default: () => []
  },
  isAddData: {
    type: Boolean,
    default: () => false
  }
})

const router = useRouter()
const mainStore = useMainStore()
const { recordHouseData } = storeToRefs(mainStore)

// 点击记录
const itemClick = (item) => {
  router.push("detail/" + item.data.houseId)

  for (let i = 0; i < recordHouseData.value.length; i++) {
    if (recordHouseData.value[i] == item) {
      recordHouseData.value.splice(i, 1)
      break
    }
  }
  recordHouseData.value.push(item)
}
</script>

<template>
  <div class="home-item">
    <template v-for="(item, index) in houselist" :key="index">
      <home-item-v3 v-if="item.discoveryContentType === 3" :itemDate="item.data" :isAddData="isAddData" @click="itemClick(item)" />
      <home-item-v9 v-else-if="item.discoveryContentType === 9" :itemData="item"  :isAddData="isAddData" @click="itemClick(item)" />
    </template>
  </div>
</template>

<style lang="less" scoped>
.home-item {
  display: flex;
  flex-wrap: wrap;
}
</style>
