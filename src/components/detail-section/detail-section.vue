<script setup>
defineProps({
  title: {
    type: String,
    default: () => "标题"
  },
  moreText: {
    type: String,
    default: () => ""
  }
})
</script>

<template>
  <div class="section">
    <div class="header">
      <h2 class="title">{{ title }}</h2>
    </div>
    <div class="content">
        <slot>
          <h3>我是默认内容</h3>
        </slot>
    </div>
    <div class="footer" v-if="moreText.length">
      <div class="more">{{ moreText }}</div>
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.section {
  margin-top: 5px;
  padding: 0 15px;
  background-color: #fff;
  .header {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;
    .title {
      font-size: 20px;
      color: #333;
    }
  }
  .content {
    padding: 8px 0;
  }
  .footer{
    display: flex;
    align-items: center;
    justify-content: right;
    height: 44px;
    line-height: 44px;
    font-size: 14px;
    font-weight: 600;
    color: var(--primary-color);
    .more {
      padding-right: 2px;
    }
  }
}
</style>
