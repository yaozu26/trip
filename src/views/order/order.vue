<script setup>
import slotHeader from '@/components/slot-header/slot-header.vue';
import orderNavBar from './cpns/order-nav-bar.vue'


</script>

<template>
  <div class="order">
    <slotHeader class="header"> 
      <template #center>
        <div class="text">订单列表</div>
      </template>
      <template #right>
        <div class="right-wrap">
          <img src="@/assets/img/order/order.png" alt="">
        </div>
      </template>
    </slotHeader>
    <orderNavBar/>
  </div>
</template>

<style lang="less" scoped>
.order {
  margin-top: 48px;
  .header {
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }
  .right-wrap {
    .text {
      color: var(--primary-color);
    }
    img{
      width: 24px;
    }
  }
}
</style>
