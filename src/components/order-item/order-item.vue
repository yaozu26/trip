<script setup>
import { formatMonthDay } from '@/utils/format_date'
import { formatPrice } from '@/utils/format_price';

defineProps({
  itemData: {
    type: Object,
    default: () => { }
  }
})
</script>

<template>
  <div class="order-item">
    <div class="header">
      <div class="name">{{ itemData.unitName }}</div>
      <div class="status">{{ itemData.orderStatusDesc }}</div>
    </div>
    <div class="center">
      <div class="img">
        <img :src="itemData.unitPicture" alt="">
      </div>
      <div class="detail">
        <div class="start-date">
          <div class="date">{{ formatMonthDay(itemData.checkInDate, "M月DD日") }}</div>
          <div class="week">周三{{ itemData.checkInLatestTime }}</div>
        </div>
        <div class="end-date">
          <div class="date">{{ formatMonthDay(itemData.checkOutDate, "M月DD日") }}</div>
          <div class="week">周五{{ itemData.checkOutLatestTime }}</div>
        </div>
        <div class="total-price">
          <div class="text">支付总价</div>
          <div class="price">{{ formatPrice(itemData.prepayAmount) }}</div>
        </div>
        <div class="line">
          <img src="@/assets/img/order/icon_right_orderlist.png" alt="">
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="left">
        <img src="@/assets/img/order/icon-time.png" alt="">
        <div class="time">30分</div>
        <div class="text">{{ itemData.summary }}</div>
      </div>
      <div class="right">
        <div class="contact">联系房东</div>
        <div class="pay">去支付</div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.order-item {
  margin-top: 10px;
  padding: 0 20px;
  background-color: #fff;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;

    .name {
      width: 200px;
      font-size: 12px;
      color: #666;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    .status {
      font-size: 16px;
      font-weight: 600;
      color: var(--primary-color);
    }
  }

  .center {
    position: relative;
    border-radius: 6px;
    overflow: hidden;

    .img {
      img {
        width: 100%;
      }
    }

    .detail {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      height: 60px;
      color: #fff;
      background-color: rgba(0, 0, 0, .6);

      .start-date,
      .end-date,
      .total-price {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 40px;
      }

      .end-date {
        padding-right: 10px;
        border-right: 2px solid #ccc;
      }

      .week {
        font-size: 10px;
      }

      .total-price {
        display: flex;
        flex-direction: column;
        align-items: center;

        .price {
          color: var(--primary-color);
        }
      }

      .line {
        position: absolute;
        left: 100px;

        img {
          width: 18px;
        }
      }
    }
  }

  .footer {
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: space-between;

    .left {
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #666;

      img {
        width: 12px;
        height: 12px;
        padding-right: 5px;
      }
      .time {
        color: var(--primary-color);
      }

    }

    .right {
      display: flex;
      align-items: center;

      .contact,
      .pay {
        width: 80px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #666;
        border: 1px solid #666;
        border-radius: 6px;
      }

      .pay {
        margin-left: 20px;
        color: #fff;
        background-color: var(--primary-color);
        border-color: transparent;
      }
    }
  }
}</style>
