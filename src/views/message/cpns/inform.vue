<script setup>
defineProps({
  info: {
    type: Object,
    default: () => { }
  },
  imgUrl: {
    type: String,
  }
})
</script>

<template>
  <div class="inform">
    <div class="left">
      <slot name="img"></slot>
    </div>
    <div class="desc">
      <div class="top">
        <div class="title">{{ info.title }}</div>
        <div class="date">{{ info.date }}</div>
      </div>
      <div class="text">{{ info.text }}</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.inform {
  display: flex;
  align-items: center;
  height: 50px;
  .desc {
    flex: 1;
    padding-left: 10px;

    .top {
      display: flex;
      justify-content: space-between;

      .date {
        font-size: 10px;
        color: #999;
      }
    }

    .text {
      font-size: 12px;
      color: #666;
    }
  }
}</style>
