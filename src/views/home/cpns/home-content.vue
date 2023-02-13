<script setup>
import homeItemV3 from '@/components/home-item/home-item-v3.vue'
import homeItemV9 from '@/components/home-item/home-item-v9.vue'
import { storeToRefs } from 'pinia';
import useHomeStore from '@/stores/modules/home';

const homeStore = useHomeStore()
const { houselist } = storeToRefs(homeStore)
</script>

<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="(item, index) in houselist" :key="index">
        <home-item-v3 v-if="item.discoveryContentType === 3" :itemDate="item.data"/>
        <home-item-v9 v-else-if="item.discoveryContentType === 9" :itemDate="item.data"/>
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.content {
  padding: 10px;
  .title {
    padding: 10px;
    font-size: 22px;
    font-weight: 500;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
