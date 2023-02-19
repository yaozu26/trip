<script>
export default {
  emits: ['tabItemClick'],
  props: {
    titles: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit("tabItemClick", index)
    },
    setCurrentIndex(index) {
      this.currentIndex = index
    }
  },
}
</script>

<template>
  <div class="tab-bar">
    <template v-for="(item, index) in titles" :key="index">
      <div class="item" @click="itemClick(index)" :class="{ active: index === currentIndex }">
        <span>{{ item }}</span>
      </div>
    </template>
  </div>
</template>

<style scoped>
.tab-bar {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  color: #333;
  background-color: #fff;
}

.item {
  flex: 1;
}

.item.active {
  color: var(--primary-color);
}

.item.active span {
  display: inline-block;
  border-bottom: 3px solid var(--primary-color);
  padding: 0 8px;
}
</style>