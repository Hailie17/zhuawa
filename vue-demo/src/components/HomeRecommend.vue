<template>
  <div class="home-recommend">
   <h3>推荐</h3>
   <div class="recommend-container">
    <div class="recommend-item" v-for="(item, index) in list" :key="item.text" @click="onClick(index)" :class="{ 'recommend-hover' : index === activeIndex}">
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
import { RouteNames } from '@/router';

@Options({
  components: {
    
  },
})
export default class HomeRecommend extends Vue {
  activeIndex = -1
  list: HomeRecommendListItem[] = [];

  onClick(index: number) {
    // TODO 跳转到列表页
    this.activeIndex = index
    this.$router.push({
      name: RouteNames.List
    })
  }

  async created() {
    this.list = await Services.getRecommendList()
  }
}
</script>
<style lang="less" scoped>
.recommend-hover {
  transform: translate3d(1px, 1px, 0);
}
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
    box-shadow: 0 1rem 2rem -0.4rem rgba(106, 182, 252, 0.5);

    img {
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
    }
  }
}
</style>
