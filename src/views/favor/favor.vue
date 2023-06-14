<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia';
import useMainStore from '@/stores/modules/main';
import favorCollectContent from './cpns/favor-collect-cotent.vue'
import favorRecordContent from './cpns/favor-record-content.vue'

const tabActive = ref(0)

const mainStore = useMainStore()
const { recordHouseData, collectHouseData } = storeToRefs(mainStore)

const removeClick = () => {
  recordHouseData.value = []
}
</script>

<template>
  <!-- 头部标签 -->
  <div class="favor">
    <div class="nav-bar">
      <div class="center">
        <van-tabs v-model:active="tabActive" type="card" title-active-color="#fff">
          <van-tab title="我的收藏"></van-tab>
          <van-tab title="浏览历史"></van-tab>
        </van-tabs>
      </div>
      <div class="right" v-show="tabActive === 1" @click="removeClick">清空</div>
    </div>
  </div>

  <!-- 内容 -->
  <div class="content">
    <favorCollectContent v-if="tabActive === 0" :houseData="collectHouseData" />
    <favorRecordContent v-else-if="tabActive === 1" :houseData="recordHouseData" />
  </div>
</template>

<style lang="less" scoped>
.favor {
  margin-top: 44px;

  .nav-bar {
    --van-border-radius-sm: 6px;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    height: 44px;
    line-height: 44px;
    background-color: #fff;

    .center {
      margin: 0 auto;
      border-radius: 6px;
    }

    .right {
      position: absolute;
      right: 10px;
      font-size: 13px;
      color: #666;
    }
  }
}
</style>
