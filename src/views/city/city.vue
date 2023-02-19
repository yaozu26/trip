<script setup>
import CityGroup from './cpns/city-group.vue'
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city'
import { storeToRefs } from 'pinia';

const router = useRouter()

// 搜索框功能
const searchValue = ref("")
const cancelClick = () => {
  router.back()
}

// tab的切换
const tabActive = ref()
// 获取网络请求
const cityStore = useCityStore()
cityStore.fetchAllcitiesData()
const { allCities } = storeToRefs(cityStore)

// 获取选中标签后的数据
const currentGroup = computed(() => allCities.value[tabActive.value])
</script>

<template>
  <div class="city">
    <div class="top">
      <!-- 1.搜索框 -->
      <van-search v-model="searchValue" placeholder="城市/区域/位置" shape="round" show-action @cancel="cancelClick" />

      <!-- 2.tab的切换 -->
      <van-tabs v-model:active="tabActive" color="#ff9854">
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key" />
        </template>
      </van-tabs>
    </div>

    <div class="content">
      <template v-for="(value, key, index) in allCities" :key="key">
        <city-group v-show="tabActive === key" :group-data="value" />
      </template>
    </div>

  </div>
</template>

<style lang="less" scoped>
.city {
  background-color: #fff;
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
