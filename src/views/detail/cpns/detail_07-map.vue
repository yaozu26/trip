<script setup>
import { ref, onMounted } from 'vue'
import detailSection from '@/components/detail-section/detail-section.vue'

const props = defineProps({
  positionData: {
    type: Object,
    default: () => {}
  }
})

const mapRef = ref()
onMounted(() => {
  const map = new BMapGL.Map(mapRef.value);          // 创建地图实例 
  const point = new BMapGL.Point(props.positionData.longitude, props.positionData.latitude);  // 创建点坐标 
  map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
  const marker = new BMapGL.Marker(point); //创建标注
  map.addOverlay(marker)
  map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
})
</script>

<template>
  <div class="map-area">
    <detailSection title="周边地图" moreText="查看更多周边信息">
      <div class="baidu" ref="mapRef">

      </div>
    </detailSection>
</div>
</template>

<style lang="less" scoped>
.map-area {
  .baidu {
    height: 250px;
  }
}
</style>
