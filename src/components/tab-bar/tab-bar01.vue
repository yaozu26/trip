<script setup>
  import tabBarData from '@/assets/data/tab-bar';
  import { getAssetsImg } from "@/utils/load_assets"
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const currentIndex = ref(0)
  const router = useRouter()
  const itemClick = (index, item) => {
    currentIndex.value = index
    router.push(item.path)
  }
</script>

<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabBarData">
      <div class="tab-bar-item" :class="{active: currentIndex === index}" @click="itemClick(index, item)">
        <img v-if="currentIndex !== index" :src="getAssetsImg(item.image)" alt="">
        <img v-else :src="getAssetsImg(item.imageActive)" alt="">
        <div class="text">{{ item.name }}</div>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  border-top: 1px solid #f3f3f3;

  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &.active{
      color: var(--primary-color);
    }
    img {
      width: 36px;
    }

    .text {
      font-size: 12px;
      margin-top: 3px;
    }
  }
}
</style>
