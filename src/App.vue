<script setup>
import TabBar from "@/components/tab-bar/tab-bar.vue"
import loading from "./components/loading/loading.vue";
import { useRoute } from "vue-router";

const route = useRoute()
</script>

<template>
  <div class="app">
    <router-view v-slot="props">
      <keep-alive include="home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view> 
    <tab-bar v-show="!route.meta.hideTabBar"/>
    <loading/>
  </div>
</template>

<style lang="less" scoped>

</style>
