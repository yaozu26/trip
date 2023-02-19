<script setup>
defineProps({
  priceIntroData: {
    type: Object,
    default: () => {}
  }
})
</script>

<template>
  <div class="price-intro">
    <h2 class="title">{{ priceIntroData.title }}</h2>
    <div class="content">{{ priceIntroData.introduction }}</div>
  </div>
</template>

<style lang="less" scoped>
.price-intro {
  margin-top: 5px;
  padding: 16px 12px;
  background: #fff;
  .title {
    font-size: 14px;
    font-weight: 700;
    color: #000;
  }
  .content {
    margin-top: 10px;
    font-size: 12px;
    line-height: 1.5;
    color: #666;
  }
}
</style>
