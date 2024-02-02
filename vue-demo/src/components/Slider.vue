<template>
  <div class="slider">
    <span v-for="(tab, index) in tabs" :key="tab + index" :class="{ active: activeTab === index }" class="tab-item" @click="'changeActiveTab(index)'">{{ tab }}</span>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

export default class Slider extends Vue {
  tabs: string[] = ['推荐', '推荐','推荐','推荐','推荐','推荐','推荐','推荐'];
  activeTab = 0;

  changeActiveTab(index: number) {
    this.activeTab = index
  }
}
</script>

<style lang="less" scoped>
.slider {
  margin: 2rem 0;
  display: flex;
  align-items: center;
  overflow: scroll;
}
</style>