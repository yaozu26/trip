<script setup>
import { ref, computed, watch } from 'vue';
import homeNavBar from './cpns/home-nav-bar.vue';
import homeSearchBox from './cpns/home-search-box.vue'
import homeCategory from './cpns/home-category.vue';
import homeContent from './cpns/home-content.vue';
import searchBar from '@/components/search-bar/search-bar.vue';
import useScroll from '@/hooks/useScroll';
import useHomeStore from '@/stores/modules/home';

const { isReachBottom, scrollTop } = useScroll()
const homeStore = useHomeStore()
homeStore.fetchHouselist()

const isSearchBar = computed(() => {
  return scrollTop.value > 500
})

watch(isReachBottom, (newValue) => {
  if(newValue) {
    homeStore.fetchHouselist().then(() => {
      isReachBottom.value = false
    })
  }
})
</script>

<template>
  <div class="home">
    <home-nav-bar/>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search-box/>
    <home-category/>
    <search-bar v-if="isSearchBar"/>
    <home-content/>
  </div>
</template>

<style lang="less" scoped>
.home {
  margin-bottom: 50px;
  .banner {
    img {
      width: 100%;
    }
  }
}
</style>
