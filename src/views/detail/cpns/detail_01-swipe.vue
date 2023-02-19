<script setup>
const props = defineProps({
  swipeData: {
    type: Array,
    default: () => ([])
  }
})

const swipeGroup = {}
for(const item of props.swipeData) {
  let valueArray = swipeGroup[item.enumPictureCategory]
  if(!valueArray) {
    valueArray = []
    swipeGroup[item.enumPictureCategory] = valueArray
  }
  valueArray.push(item)
}

const nameReg = /【(.*?)】/i
const getTitle = (value) => {
  const results = nameReg.exec(value)
  return results[1]
}

const getCategoryIndex = (item) => {
  const valueArray = swipeGroup[item.enumPictureCategory]
  return valueArray.findIndex(data => data === item) + 1
}
</script>

<template>
  <div class="swipe">
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white" lazy-render>
      <template v-for="item in swipeData" :key="item.orderIndex">
        <van-swipe-item class="item">
          <img :src="item.url" alt="">
        </van-swipe-item>
      </template>
      <template #indicator="{ active, total }">
        <div class="indicator">
          <template v-for="(value, key, index) in swipeGroup" :key="key">
            <div class="item" :class="{activeItem: swipeData[active]?.enumPictureCategory == key}">
              <span class="text">{{ getTitle(value[0].title) }}</span>&nbsp;
              <span class="count" v-if="swipeData[active]?.enumPictureCategory == key">{{ getCategoryIndex(swipeData[active]) }} / {{ value.length }}</span>
            </div>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<style lang="less" scoped>
.swipe {
  .swipe-list {
    .item {
      img {
        width: 100%;
      }
    }

    .indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      display: flex;
      align-items: center;
      padding: 2px 5px;
      font-size: 12px;
      color: #fff;
      background: rgba(0, 0, 0, .1);
      .item {
        margin: 1px 5px;
      }
      .activeItem {
        padding: 0 2px;
        border-radius: 4px;
        color: #333;
        background: #fff;
      }
    }
  }
}
</style>
