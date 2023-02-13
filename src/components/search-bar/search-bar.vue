<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import useMainStore from '@/stores/modules/main';
import { formatMonthDay } from '@/utils/format_date';

const mainStore = useMainStore()
const { startDate, endDate } = storeToRefs(mainStore)
const startDateStr = computed(() => formatMonthDay(startDate.value, "MM.DD"))
const endDateStr = computed(() => formatMonthDay(endDate.value, "MM.DD"))
</script>

<template>
  <div class="search-bar">
    <div class="search">
      <div class="select-time">
        <div class="startDate">
          <span class="text">住</span>
          <span class="time">{{ startDateStr }}</span>
        </div>
        <div class="leaveDate">
          <span class="text">离</span>
          <span class="time">{{ endDateStr }}</span>
        </div>
      </div>
      <div class="left"></div>
      <div class="center">
        <div class="keyword">关键字/位置/民宿</div>
      </div>
      <div class="right">
        <i class="icon"></i>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.search-bar {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  padding: 16px;
  background: #fff;

  .search {
    display: flex;
    align-items: center;
    padding: 0 10px;
    height: 45px;
    line-height: 45px;
    border-radius: 6px;
    font-size: 12px;
    color: #666;
    background: #f2f4f6;

    .select-time {
      position: relative;
      display: flex;
      flex-direction: column;

      .startDate,
      .leaveDate {
        line-height: normal;

        &::after {
          content: "";
          width: 0;
          height: 0;
          border: 4px solid #666;
          border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #666;
          // -webkit-border-radius: 3px;
          border-radius: 3px;
          // -webkit-transform: rotate(45deg);
          // -ms-transform: rotate(45deg);
          transform: rotate(45deg);
          position: absolute;
          bottom: 0px;
          right: -2px;
        }
      }

      .time {
        margin: 0 12px 0 6px;
      }
    }

    .left {
      height: 100%;
      width: 1px;
      background: #fff;
    }

    .center {
      flex: 1;
      padding: 0 6px;
      color: #999;
    }

    .right {
      display: flex;
      align-items: center;

      .icon {
        width: 24px;
        height: 24px;
        background: url(@/assets/img/home/home-sprite.png) no-repeat -28px -151px/207px 192px;
      }
    }
  }
}
</style>
