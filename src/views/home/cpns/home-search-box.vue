<script setup>
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city'

const router = useRouter()
const cityStore = useCityStore()

const cityClick = () => { 
  router.push("/city")
}

const positionClick = () => {
  navigator.geolocation.getCurrentPosition(res => {
    console.log("获取位置成功", res)
  }, err => {
    console.log("获取位置失败", err)
  }, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  })
}
</script>

<template>
  <div class="search-box">
    <!-- 位置信息 -->
    <div class="location">
      <div class="city" @click="cityClick">{{ cityStore.currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>

    <!-- 日期范围 -->
  </div>
</template>

<style lang="less" scoped>
.search-box {

  .location {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 44px;
    color: #333;

    .position {
      display: flex;
      justify-content: space-between;
      width: 74px;

      .text {
        font-size: 12px;
        color: #666;
      }

      img {
        position: relative;
        top: -4px;
        width: 16px;
      }
    }
  }
}
</style>
