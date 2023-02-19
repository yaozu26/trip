<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import detail_01Swipe from './cpns/detail_01-swipe.vue';
import detail_02Infos from './cpns/detail_02-infos.vue';
import detail_03Facility from './cpns/detail_03-facility.vue';
import detail_04Introduce from './cpns/detail_04-introduce.vue';
import detail_05Comment from './cpns/detail_05-comment.vue';
import detail_06Rules from './cpns/detail_06-rules.vue';
import detail_07Map from './cpns/detail_07-map.vue';
import detail_08PriceIntro from './cpns/detail_08-price-intro.vue';
import navControl from '@/components/nav-control/nav-control.vue';
import useDetailStore from '@/stores/modules/detail'
import useScroll from '@/hooks/useScroll';

const router = useRouter()
const route = useRoute()
const houseId = route.params.id

const onClickLeft = () => {
  router.back()
}

const detailStore = useDetailStore()
const { detailData } = storeToRefs(detailStore)
detailStore.fetchDetailDate(houseId)
const mainPartData = computed(() => detailData.value.mainPart)

const detailRef = ref({})
const { scrollTop } = useScroll(detailRef)

const isShow = computed(() => {
  return scrollTop.value > 150
})

// tab-control与组件的交互
const sectionEls = ref({})
const names = computed(() => {
  return Object.keys(sectionEls.value)
})

const getSectionRef = (value) => {
  if (!value) return
  const key = value.$el.getAttribute("name")
  sectionEls.value[key] = value.$el
}

let isClick = false
let currentDistance = -1
const tabClick = (index) => {
  const key = Object.keys(sectionEls.value)[index]
  const el = sectionEls.value[key]

  isClick = true
  currentDistance = el.offsetTop - 44
  detailRef.value.scrollTo({
    top: el.offsetTop - 44,
    behavior: "smooth"
  })
}

// 索引匹配算法
const tabControlRef = ref()
const values = computed(() => {
  return Object.values(sectionEls.value).map(el => el.offsetTop)
})
watch(scrollTop, (newValue) => {
  if(Math.round(newValue) === currentDistance) {
    isClick = false
  }
  if(isClick) return
  let oldIndex
  let index = values.value.length - 1
  for (let i = 0; i < values.value.length; i++) {
    if (values.value[i] > newValue + 44) {
      index = i - 1
      break
    }
  }
  if(index === oldIndex) return
  oldIndex = index
  tabControlRef.value?.setCurrentIndex(index)
})
</script>

<template>
  <div class="detail top-page" ref="detailRef">
    <nav-control v-if="isShow" :titles="names" @tabItemClick="tabClick" ref="tabControlRef" />
    <van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="onClickLeft" />
    <div class="main" v-if="mainPartData" v-memo="[mainPartData]">
      <detail_01-swipe :swipeData="mainPartData.topModule.housePicture.housePics" />
      <detail_02-infos name="概述" :ref="getSectionRef" :infoData="mainPartData.topModule" />
      <detail_03-facility name="设施" :ref="getSectionRef"
        :houseFacilityData="mainPartData.dynamicModule.facilityModule.houseFacility" />
      <detail_04-introduce name="房东" :ref="getSectionRef" :landlordData="mainPartData.dynamicModule.landlordModule" />
      <detail_05-comment name="评价" :ref="getSectionRef" :commentData="mainPartData.dynamicModule.commentModule" />
      <detail_06-rules name="须知" :ref="getSectionRef" :rulesData="mainPartData.dynamicModule.rulesModule" />
      <detail_07-map name="位置" :ref="getSectionRef" :positionData="mainPartData.dynamicModule.positionModule" />
      <detail_08-price-intro :priceIntroData="mainPartData.introductionModule" />
    </div>
    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="">
      <div class="text">弘源旅途, 永无止境!</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.main {
  background-color: #f7f8fb;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;

  img {
    width: 120px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>
