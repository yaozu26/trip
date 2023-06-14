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
  <div class="record-content">
    <home-item :houselist="houseData" />
  </div>
</template>

<style lang="less" scoped>
.record-content {
  display: flex;
  flex-wrap: wrap;
}
</style>
