<script setup>
import detailSection from '@/components/detail-section/detail-section.vue';

defineProps({
  commentData: {
    type: Object,
    default: () => { }
  }
})
</script>

<template>
  <div class="comment-area">
    <detailSection title="房客点评" :moreText="`查看全部${commentData.totalCount}条评论`">
      <div class="header">
        <div class="left">
          <div class="score">
            <div class="title">{{ commentData.overall }}</div>
            <div class="line"></div>
          </div>
          <div class="info">
            <div class="title">{{ commentData.scoreTitle }}</div>
            <div class="count">{{ commentData.totalCount }}条评论</div>
            <van-rate v-model="commentData.overall" readlonly allow-half size="13px" />
          </div>
        </div>
        <div class="right">
          <template v-for="(item, index) in commentData.subScores" :key="index">
            <div class="item">{{ item }}</div>
          </template>
        </div>
      </div>
      <div class="tags">
        <template v-for="(item, index) in commentData.commentTagVo">
          <div class="text-item" :style="{ color: item.color, background: item.backgroundColor }">{{ item.text }}</div>
        </template>
      </div>
      <div class="content">
        <div class="user">
          <div class="avatar">
            <img :src="commentData.comment.userAvatars" alt="">
          </div>
          <div class="profile">
            <div class="user-name">{{ commentData.comment.userName }}</div>
            <div class="date">{{ commentData.comment.checkInDate }}</div>
          </div>
        </div>
        <div class="text">{{ commentData.comment.commentDetail }}</div>
      </div>
    </detailSection>
  </div>
</template>

<style lang="less" scoped>
.comment-area {
  --van-rate-icon-full-color: var(--primary-color);

  .header {
    display: flex;
    margin: 10px 0;
    .left {
      display: flex;
      align-items: center;

      .score {
        position: relative;
        width: 65px;
        height: 100%;
        font-size: 48px;
        font-weight: 600;
        color: #333;

        .title {
          position: relative;
          z-index: 9;
        }

        .line {
          position: absolute;
          bottom: 4px;
          width: 66px;
          height: 6px;
          border-radius: 3px;
          background-image: var(--theme-linear-gradient);
        }
      }

      .info {
        margin-left: 19px;
        font-size: 12px;

        .count {
          margin: 3px 0;
          color: #999;
        }
      }
    }

    .right {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;

      .item {
        margin-left: 5px;
        font-size: 12px;
        color: #666;
      }
    }
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    .text-item {
      margin: 5px 8px 0 0;
      padding: 3px 5px;
      border-radius: 10px;
      font-size: 12px;
    }
  }
  .content {
    margin: 10px 0;
    padding: 10px;
    border-radius: 6px;
    background-color: #f7f9fb;
    .user {
      display: flex;
      .avatar {
        img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }
      }
      .profile {
        margin-left: 8px;
        .date {
          margin-top: 3px;
          font-size: 12px;
          color: #999;
        }
      }
    }
    .text {
      margin-top: 16px;
      line-height: 16px;
      font-size: 12px;
      color: #333;
    }
  }
}
</style>
