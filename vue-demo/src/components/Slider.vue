<template>
  <div class="slider">
    <span v-for="(tab, index) in tabs" :key="tab + index" :class="{ active: activeTab === index }" class="tab-item" @click="changeActiveTab(index)">{{ tab }}</span>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

export default class Slider extends Vue {
  tabs: string[] = ['推荐', '小孩','销毁','喜欢','心寒','型号','协会','单独'];
  activeTab = 0;

  changeActiveTab(index: number) {
    this.activeTab = index
    this.$emit('onTabChange', index)
  }
}
</script>

<style lang="less" scoped>
.slider {
  margin: 2rem 0;
  display: flex;
  align-items: center;
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 0; // 取消滚动条
  }

  .tab-item {
    flex: 0 0 25%; // 占4个
    text-align: center;
    color: #353535;
    font-size: 1.6rem;
    line-height: 2.6rem;
    transition: all .3s ease-in-out; // 动画

    &.active {
      transform: scale(1.2); //放大
      color: #3a3a3a;
      font-weight: 600;
    }
  }
}
</style>