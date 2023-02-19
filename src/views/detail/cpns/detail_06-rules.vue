<script setup>
import detailSection from '@/components/detail-section/detail-section.vue';

defineProps({
  rulesData: {
    type: Object,
    default: () => {}
  }
})
</script>

<template>
  <div class="rules-area">
    <detailSection title="预定须知">
      <div class="rule">
        <template v-for="(item, index) in rulesData.orderRules" :key="index">
          <div class="item">
            <span class="title">{{ item.title }}</span>
            <span class="text">{{ item.introduction }}</span>
            <span class="tip" v-if="item.tips">查看说明</span>
          </div>
        </template>
      </div>
    </detailSection>
  </div>
</template>

<style lang="less" scoped>
.rules-area {
  .rule {
    .item {
      display: flex;
      justify-content: space-between;
      margin: 10px 0 20px 0;
      font-size: 12px;
      .title {
        width: 64px;
        color: #666;
      }
      .text {
        flex: 1;
        color: #333;
      }
    }
  }
}
</style>
