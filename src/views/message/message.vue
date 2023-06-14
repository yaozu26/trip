<script setup>
import slotHeader from '@/components/slot-header/slot-header.vue'
import inform from './cpns/inform.vue';
import messageContent from './cpns/message-content.vue'
import mesaageFooter from './cpns/mesaage-footer.vue';

const info1 = {
  title: "系统通知",
  date: "2023-03-01",
  text: "通知1"
}

const info2 = {
  title: "优惠促销",
  date: "2023-02-28",
  text: "通知2"
}
</script>

<template>
  <div class="message">
    <slotHeader>
      <template #center>
        消息
      </template>
      <template #right>
        <div class="right-wrap">
          <img src="@/assets/img/message/service.png" alt="">
          <div class="text">客服</div>
        </div>
      </template>
    </slotHeader>
    <div class="content-area">
      <div class="inform-area">
        <inform :info="info1" class="info1">
          <template #img>
            <div class="img">
              <img src="@/assets/img/message/inform.png" alt="">
            </div>
          </template>
        </inform>
        <inform :info="info2">
          <template #img>
            <div class="img img2">
              <img src="@/assets/img/message/inform_2.png" alt="">
            </div>
          </template>
        </inform>
      </div>
      <messageContent />
    </div>
    <mesaageFooter />
  </div>
</template>

<style lang="less" scoped>
.message {
  .right-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 20px;
    }

    .text {
      font-size: 8px;
      color: #666;
    }
  }

  .content-area {
    margin-top: 60px;
    padding: 0 20px;
    background-color: #fff;

    .inform-area {
      .info1 {
        border-bottom: 1px solid #eee;
      }

      .img {
        background-color: #44d39e;
        border-radius: 50%;

        img {
          width: 30px;
        }
      }

      .img2 {
        background-color: #fff;
      }
    }
  }
}
</style>
