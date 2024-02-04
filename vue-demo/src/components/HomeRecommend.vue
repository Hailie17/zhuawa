<template>
  <div class="home-recommend">
   <h3>推荐</h3>
   <div class="recommend-container">
    <div class="recommend-item" v-for="(item, index) in list" :key="item.text" @click="onClick(index)">
      <img :src="item.image" alt="">
      <span>{{ item.text }}</span>
    </div>
   </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { HomeRecommendListItem } from '@/services/types';
import Services from '@/services';

@Options({
  components: {
    
  },
})
export default class HomeRecommend extends Vue {
  list: HomeRecommendListItem[] = [];

  onClick(index: number) {
    // TODO 跳转到列表页
  }

  async created() {
    this.list = await Services.getRecommendList()
  }
}
</script>
<style lang="less" scoped>
h3 {
  font-size: 1.6rem;
  font-weight: 600;
}
.recommend-container {
  display: flex;
  flex-wrap: wrap; // 换行
  justify-content: space-between;

  .recommend-item {
    width: 10.6rem;
    height: 10.6rem;
    margin-bottom: 3rem;

    background: grey;
    border-radius: 0.5rem;

    img {
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
    }
  }
}
</style>
