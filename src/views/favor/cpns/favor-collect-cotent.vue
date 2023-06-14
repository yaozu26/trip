<script setup>
import homeItem from '@/components/home-item/home-item.vue';

defineProps({
  houseData: {
    type: Array,
    default: () => []
  }
})

</script>

<template>
  <div class="collect-content">
    <homeItem :houselist="houseData" :isAddData="true" />
  </div>
</template>

<style lang="less" scoped></style>
