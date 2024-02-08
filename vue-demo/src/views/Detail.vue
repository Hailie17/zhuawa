<template>
  <div class="detail-root">
    <div class="detail">
      <img :src="image" alt="" class="detail-banner">
      <div class="content-container">
        <h1>{{ title }}</h1>
        <div class="content">{{ content }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { DetailInfo } from '@/services/types';
import { Options, Vue } from 'vue-class-component';
import store from '../store';

// 头图
// 标题
// 正文

@Options({
  components: {
    
  },
})
export default class Detail extends Vue {
  title = '';
  content = '';
  image = '';

  get id() {
    return this.$route.params.id
  }
  created() {
    const storeData = store.state.detailInfos as DetailInfo[]
    const currentData = storeData.filter(item => String(item.id) === this.id)[0]

    this.title = currentData.title
    this.content = currentData.content
    this.image = currentData.image
  }
}
</script>
<style lang="less" scoped>
.detail-root {
  position: relative;
  height: 100vh;
  .detail-banner {
    width: 100%;
  }
  .content {
    white-space: pre-wrap;
    text-align: left;
  }
}
</style>