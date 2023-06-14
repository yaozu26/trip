<script setup>

</script>

<template>
  <div class="bg">
    <div class="cover">
      <img src="@/assets/img/message/icon_message.png" alt="">
    </div>
    <div class="text">暂无聊天消息</div>
  </div>
</template>

<style lang="less" scoped>
.bg {
  position: relative;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
  }

  .text {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    color: #666;
  }
}
</style>
