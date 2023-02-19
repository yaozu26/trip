<script setup>
import detailSection from '@/components/detail-section/detail-section.vue';

defineProps({
  landlordData: {
    type: Object,
    default: () => { }
  }
})
</script>

<template>
  <div class="introduce-area">
    <detailSection title="房东介绍" moreText="查看房东主页">
      <div class="introduce">
        <div class="top">
          <img :src="landlordData.topScroll" alt="">
        </div>
        <div class="header">
          <div class="logo">
            <img :src="landlordData.hotelLogo" alt="">
          </div>
          <div class="info">
            <div class="name">{{ landlordData.hotelName }}</div>
            <div class="tags">
              <template v-for="(item, index) in landlordData.hotelTags">
                <div class="item" :style="{ color: item.tagText.color }">
                  <div class="text">{{ item.tagText.text }}</div>
                  <div class="line" v-if="index < landlordData.hotelTags.length - 1">|</div>
                </div>
              </template>
            </div>
          </div>
          <div class="right">
            <div class="contact">联系房东</div>
          </div>
        </div>
        <div class="bottom">
          <template v-for="(item, index) in landlordData.hotelSummary" :key="index">
            <div class="item">
              <div class="title">{{ item.title }}</div>
              <div class="introduction">{{ item.introduction }}</div>
              <div class="tip">{{ item.tip }}</div>
            </div>
          </template>
        </div>
      </div>
    </detailSection>
  </div>
</template>

<style lang="less" scoped>
.introduce-area {
  .introduce {
    .top {
      margin-top: 10px;

      img {
        width: 100%;
        border-radius: 4px;
      }
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .logo {
        img {
          width: 54px;
          height: 54px;
        }
      }

      .info {
        flex: 1;
        display: flex;
        flex-direction: column;

        .name {
          margin-top: 8px;
          font-size: 16px;
          font-weight: 600;
        }

        .tags {
          display: flex;
          margin-top: 5px;
          font-size: 12px;
          .item {
            display: flex;
            .line {
              margin: 0 .1875rem;
            }
          }
        }
      }

      .right {
        .contact {
          padding: 0 12px;
          width: 48px;
          height: 24px;
          line-height: 24px;
          text-align: center;
          border-radius: 4px;
          font-size: 12px;
          color: #fff;
          background-image: var(--theme-linear-gradient);
        }
      }
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 50px 10px 10px;
      .item {
        font-size: 12px;
        color: #999;
        .introduction {
          margin: 5px 0;
          font-size: 18px;
          font-weight: 700;
          color: #333;
        }
      }
    }
  }
}
</style>
