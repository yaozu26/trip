<script setup>
import { formatPrice } from '@/utils/format_price';

defineProps({
  itemDate: {
    type: Object,
    default: () => { }
  }
})
</script>

<template>
  <div class="home-item-v3">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemDate.image.url" alt="">
      </div>
      <div class="info">
        <div class="location">
          <img src="@/assets/img/home/location.png" alt="">
          <span>{{ itemDate.location }}</span>
        </div>
        <div class="summary">{{ itemDate.summaryText }}</div>
        <div class="name">{{ itemDate.houseName }}</div>
        <div class="price">
          <div class="newPrice">{{ formatPrice(itemDate.finalPrice) }}</div>
          <div class="oldPrice">{{ formatPrice(itemDate.productPrice) }}</div>
          <div class="discount">{{ itemDate?.priceTipBadge?.text ? itemDate.priceTipBadge.text : "已减0"}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home-item-v3 {
  width: 50%;

  .item-inner {
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
      font-size: 12px;
      color: #666;
      .location {
        img {
          width: 12px;
          height: 12px;
        }
      }
      .name {
        margin: 5px 0;
        font-size: 14px;
        // 文本超出两行显示省略号
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .price {
        display: flex;
        align-items: start;
        margin: 8px 0;
        .newPrice {
          font-size: 14px;
          color: #ff9645;
        }
        .oldPrice {
          margin: 0 2px;
          color: #999;
          text-decoration: line-through;
        }
        .discount {
          background-image: linear-gradient(270deg,#f66,#ff9f9f);
          padding: 0 6px 2px;
          color: #fff;
          border-radius: 10px;
        }
      }
    }
  }
}
</style>
