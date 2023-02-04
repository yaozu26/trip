<script setup>
import { computed } from 'vue';
import useCityStore from '@/stores/modules/city';
import { useRouter } from 'vue-router';

const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})

const indexList = computed(() => {
  const list =  props.groupData.cities.map(item => item.group)
  list.unshift("#")
  return list
})

// 监听城市的点击
const router = useRouter()
const cityStore = useCityStore()
const cityClick = (city) => {
  cityStore.currentCity = city
  router.back()
}
</script>

<template>
  <div class="city-group">
    <van-index-bar :sticky="false" :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="(city, index) in groupData.hotCities" :key="index">
          <div class="hot-city" @click="cityClick(city)">{{ city.cityName }}</div>
        </template>
      </div>

      <template v-for="(group, index) in groupData.cities" :key="index">
        <van-index-anchor :index="group.group" />
        <template v-for="(value, key, index) in group.cities" :key="key">
          <van-cell :title="value.cityName" @click="cityClick(value)"/>
        </template>
      </template>>
    </van-index-bar>
  </div>
</template>

<style lang="less" scoped>
  .city-group {
    .list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      margin: 10px;
      margin-right: 25px;

      .hot-city {
        width: 70px;
        height: 28px;
        margin: 5px 0;
        text-align: center;
        line-height: 28px;
        font-size: 14px;
        color: #000;
        background-color: #fff4ec;
        border-radius: 13px;
      }
    }
  }
</style>
