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
