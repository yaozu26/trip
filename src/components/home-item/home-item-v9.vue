<script setup>
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { formatPrice } from '@/utils/format_price';
import useMainStore from '@/stores/modules/main';

const props = defineProps({
  itemData: {
    type: Object,
    default: () => { }
  },
  isAddData: {
    type: Boolean,
    default: () => false
  }
})

const mainStore = useMainStore()
const { collectHouseData } = storeToRefs(mainStore)


// 收藏卡片事件
let isAddDataItem = ref(props.isAddData)
const collectClick = (item) => {
  isAddDataItem.value = true

  for (let i = 0; i < collectHouseData.value.length; i++) {
    if (collectHouseData.value[i] == item) {
      isAddDataItem.value = false
      collectHouseData.value.splice(i, 1)
      break
    }
  }

  if (isAddDataItem.value) {
    collectHouseData.value.push(item)
  }
}

// 评分
const itemScore = computed(() => Number(props.itemData.data.commentScore))

</script>

<template>
  <div class="home-item-v9">
    <div class="item-inner">
      <!-- <div class="heart" @click.stop="collectClick(itemData)">
        <img src="@/assets/img/favor/heart.png" alt="" v-if="!isAddDataItem">
        <img src="@/assets/img/favor/heart_active.png" alt="" v-if="isAddDataItem">
      </div> -->
      <div class="cover">
        <img :src="itemData.data.image.url" alt="">
      </div>
      <div class="info">
        <div class="summary">{{ itemData.data.summaryText }}</div>
        <div class="name">{{ itemData.data.houseName }}</div>
        <div class="bottom">
          <van-rate :model-value="itemScore" size="15px" color="#fff" readonly allow-half />
          <div class="price">{{ formatPrice(itemData.data.finalPrice) }}</div>
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

    .heart {
      position: absolute;
      top: 10px;
      right: 10px;

      img {
        width: 24px;
        height: 24px;
      }
    }

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
}</style>
