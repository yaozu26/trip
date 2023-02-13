<script setup>
import { computed } from 'vue';
import { formatPrice } from '@/utils/format_price';

const props = defineProps({
  itemDate: {
    type: Object,
    default: () => { }
  }
})

const itemScore = computed(() => Number(props.itemDate.commentScore))
</script>

<template>
  <div class="home-item-v9">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemDate.image.url" alt="">
      </div>
      <div class="info">
        <div class="summary">{{ itemDate.summaryText }}</div>
        <div class="name">{{ itemDate.houseName }}</div>
        <div class="bottom">
          <van-rate :model-value="itemScore" size="15px" color="#fff" readonly allow-half />
          <div class="price">{{ formatPrice(itemDate.finalPrice) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home-item-v9 {
  width: 50%;

  .item-inner {
    position: relative;
    margin: 5px;
    border-radius: 6px;
    overflow: hidden;

    .cover {
      img {
        width: 100%;
      }
    }

    .info {
      padding: 8px 10px;
      position: absolute;
      bottom: 0;
      color: #fff;

      .summary {
        font-size: 12px;
      }

      .name {
        margin: 5px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .bottom {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
