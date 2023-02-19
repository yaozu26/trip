<script setup>
defineProps({
  infoData: {
    type: Object,
    default: () => {}
  }
})
</script>

<template>
  <div class="info">
    <div class="name">{{ infoData.houseName }}</div>
    <div class="tags-list">
      <template v-for="(item, index) in infoData.houseTags" :key="index">
        <span class="tag-item" v-if="item.tagText"
          :style="{ color: item.tagText.color, background: item.tagText.background.color }">
          {{ item.tagText.text }}
        </span>
      </template>
    </div>
    <div class="comment extra">
      <div class="left">
        <div class="score">{{ infoData.commentBrief.overall }}</div>
        <div class="title">{{ infoData.commentBrief.scoreTitle }}</div>
        <div class="brief">"{{ infoData.commentBrief.commentBrief }}"</div>
      </div>
      <div class="right">
        <div class="count">{{ infoData.commentBrief.totalCount }}条评论</div>
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="position extra">
      <div class="left">{{ infoData.nearByPosition.address }}</div>
      <div class="right">
        <div class="text">地图·周边</div>
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.info {
  padding: 16px;
  background-color: #fff;

  .extra {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 12px 0;
    padding: 8px 12px;
    border-radius: 6px;
    background-color: #f5f7fa;

    .left {
      display: flex;
      align-items: baseline;
    }

    .right {
      display: flex;
      color: var(--primary-color);
    }
  }

  .name {
    margin-bottom: 6px;
    line-height: 24px;
    text-align: justify;
    font-size: 20px;
    font-weight: 700;
  }

  .tags-list {
    margin: 10px 0;

    .tag-item {
      margin: 0 2px;
      padding: 1px 3px;
      font-size: 12px;
    }
  }

  .comment {
    .left {

      .score {
        font-size: 18px;
        font-weight: 700;
      }

      .title {
        margin: 0 3px;
        font-size: 12px;
        font-weight: 700;
      }

      .brief {
        font-size: 12px;
        color: #666;
      }
    }

    .right {
      .count {
        margin-right: 2px;
        font-size: 12px;
      }
    }
  }

  .position {
    .left {
      font-weight: 700;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box; //设置为弹性伸缩盒子
      -webkit-box-orient: vertical; //设置子元素的排列方式
      -webkit-line-clamp: 1; //显示行数
    }

    .right {
      font-size: 12px;

      .text {
        padding-right: 2px;
      }
    }
  }
}
</style>
