<script setup>
import { storeToRefs } from 'pinia';
import useHomeStore from '@/stores/modules/home';

const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore)
homeStore.fetchCategories()
</script>

<template>
  <div class="category">
    <template v-for="item in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <span class="title">{{ item.title }}</span>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
.category {
  display: flex;
  align-items: center;
  overflow-x: auto;
  height: 80px;
  padding: 0 10px;
  &::-webkit-scrollbar {
    display: none;
  }
  .item {
    // 指定flex元素不可收缩
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70px;
    img {
      width: 32px;
      height: 32px;
    }
    .title {
      padding-top: 4px;
      font-size: 12px;
    }
  }
}
</style>
