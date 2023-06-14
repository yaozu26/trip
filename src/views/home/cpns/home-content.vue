<script setup>
import { storeToRefs } from 'pinia';
import useHomeStore from '@/stores/modules/home';
import homeItem from '@/components/home-item/home-item.vue';

const homeStore = useHomeStore()
const { houselist } = storeToRefs(homeStore)
</script>

<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <home-item :houselist="houselist"/>
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


}
</style>
