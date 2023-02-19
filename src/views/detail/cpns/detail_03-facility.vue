<script setup>
import detailSection from '@/components/detail-section/detail-section.vue';

defineProps({
  houseFacilityData: {
    type: Object,
    default: () => { }
  }
})
</script>

<template>
  <div class="facility-area">
    <detailSection title="房屋设施" moreText="查看全部设施">
      <div class="facility">
        <template v-for="(item, index) in houseFacilityData.houseFacilitys" :key="index">
          <div class="item" v-if="houseFacilityData.facilitySort?.includes(index)">
            <div class="head">
              <img :src="item.icon" alt="">
              <div class="text">{{ item.groupName }}</div>
            </div>
            <div class="list">
              <template v-for="iten in item.facilitys.slice(0, 4)">
                <div class="iten">
                  <i class="icon icon_check"></i>
                  <span class="text">{{ iten.name }}</span>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </detailSection>
  </div>
</template>

<style lang="less" scoped>
.facility-area {
  .facility {
    display: flex;
    flex-direction: column;
    padding: 5px 0;
    border-radius: 6px;
    background-color: #f7f9fb;

    .item {
      display: flex;
      align-items: center;
      margin: 25px 0;
      font-size: 12px;

      .head {
        width: 90px;
        text-align: center;

        img {
          width: 20px;
          height: 20px;
        }

        .text {
          margin-top: 5px;
          color: #000;

        }
      }

      .list {
        flex: 1;
        display: flex;
        flex-wrap: wrap;

        .iten {
          margin: 4px 0;
          width: 50%;

          .icon {
            margin: 0 6px;
          }
        }
      }
    }
  }
}
</style>
