<script setup>
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city'
import useMainStore from '@/stores/modules/main';
import useHomeStore from '@/stores/modules/home'
import { formatMonthDay, formatDiffDays } from '@/utils/format_date';

const router = useRouter()
const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)

const cityClick = () => {
  router.push("/city")
}

// 获取地理位置
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

const mainStore = useMainStore()
const { startDate, endDate } = storeToRefs(mainStore)
// 日期处理
const startDateStr = computed(() => formatMonthDay(startDate.value))
const endDateStr = computed(() => formatMonthDay(endDate.value))
const stopDays = computed(() => formatDiffDays(startDate.value, endDate.value))
let show = ref(false)
const dateClick = () => {
  show.value = true
}
const onConfirm = (value) => {
  startDate.value = value[0]
  endDate.value = value[1]
  show.value = false
}

const homeStore = useHomeStore()
const { hotSuggests } = storeToRefs(homeStore)
// 热门建议
homeStore.fetchHotSuggests()

// 开始搜索
const searchBtnClick = () => {
  router.push({
    path: "/search",
    query: {
      startDate: startDate.value,
      endDate: endDate.value,
      currentCity: currentCity.value.cityName
    }
  })
}
</script>

<template>
  <div class="search-box">
    <!-- 位置信息 -->
    <div class="location section">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>

    <!-- 日期范围 -->
    <div class="date-range section" @click="dateClick">
      <div class="startDate date">
        <span class="text">入住</span>
        <span class="time">{{ startDateStr }}</span>
      </div>
      <div class="stopDays">
        <span>共{{ stopDays }}晚</span>
      </div>
      <div class="leaveDate date">
        <span class="text">离店</span>
        <span class="time">{{ endDateStr }}</span>
      </div>
    </div>
    <van-calendar v-model:show="show" type="range" :show-confirm="false" @confirm="onConfirm" :round="false" />

    <!-- 价格/关键字 -->
    <div class="price-count section">
      <div class="price">价格不限</div>
      <div class="count">人数不限</div>
    </div>
    <div class="keyword section">
      关键字/位置/民宿名
    </div>

    <!-- 热门建议 -->
    <div class="hot-suggest">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div class="item" :style="{color: item.tagText.color, background: item.tagText.background.color}">{{ item.tagText.text }}</div>
      </template>
    </div>

    <!-- 开始搜索 -->
    <div class="search-btn section">
      <div class="btn" @click="searchBtnClick">开始搜索</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.search-box {
  --van-calendar-popup-height: 100%;
  .section {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 20px;
    color: #999;
  }

  .location {
    justify-content: space-between;
    color: #333;

    .position {
      justify-content: space-between;
      width: 74px;

      .text {
        font-size: 12px;
      }

      img {
        padding-left: 4px;
        position: relative;
        top: 0;
        width: 16px;
      }
    }
  }

  .date-range {
    justify-content: space-between;

    .date {
      display: flex;
      flex-direction: column;
    }

    .stopDays {
      font-size: 12px;
    }

    .leaveDate {
      min-width: 30%;
    }

    .time {
      color: #333;
    }
  }

  .price-count {
    justify-content: space-between;
    .count {
      width: 30%;
    }
  }
  .keyword {
    border-bottom: 1px solid #f8f8f8;
  }

  .hot-suggest {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 20px;
    margin: 10px 0;
    .item {
      margin: 4px;
      padding: 4px 8px;
      font-size: 12px ;
      border-radius: 14px;
    }
  }

  .search-btn {
    .btn {
      width: 100%;
      height: 38px;
      line-height: 38px;
      text-align: center;
      color: #fff;
      border-radius: 20px;
      background-image: var(--theme-linear-gradient);
    }
  }
}
</style>
