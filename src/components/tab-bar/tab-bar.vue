<script setup>
import tabBarData from '@/assets/data/tab-bar';
import { getAssetsImg } from "@/utils/load_assets"
import { ref } from 'vue';

const currentIndex = ref(0)
</script>

<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabBarData">
        <van-tabbar-item :to="item.path">
          <span>{{ item.name }}</span>
          <template #icon>
            <img v-if="currentIndex !== index" :src="getAssetsImg(item.image)" alt="">
            <img v-else :src="getAssetsImg(item.imageActive)" alt="">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<style lang="less" scoped>
.tab-bar {
  img {
    height: 26px;
  }
}
</style>
