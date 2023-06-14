<script setup>

</script>

<template>
  <div class="header">
    <div class="left"></div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.header {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 48px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left, .right {
    text-align: center;
    width: 20%;
  }
  .center {
    flex: 1;
    text-align: center;
  }
}
</style>
