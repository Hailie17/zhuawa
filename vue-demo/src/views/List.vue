<template>
  <div class="list-page">
    <div class="input-container">
      <input type="text" v-model="search" class="search" placeholder="请输入关键字搜索">
    </div>
    <div class="list-container">
      <div class="list-item" v-for="item in currentList" :key="item.id" @click="toDetail(item.id)">
        <div class="left-section"></div>
        <div class="right-section"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Services from '@/services'
import { DetailInfo } from '@/services/types'

@Options({
  components: {
    
  },
})
export default class List extends Vue {
  search = '';
  textList: DetailInfo[] = []

  get currentList () {
    // 关键字搜索后实际要展示的列表
    return this.textList.filter(item  => item.title.indexOf(this.search) > -1 )
  }
  toDetail(id: number) {
    // TODO 跳转到详情页

  }

  async created() {
    this.textList = await Services.getList()
  }
}
</script>
<style lang="less" scoped>
.list-container {
  .search {
    outline-style: none;
    border: 1px solid #ccc;
    border-radius: 0.3rem;

    padding: 1rem;
    width: 60%;
    margin: 1rem auto;
    font-size: 1.6rem;
    text-align: center;
  }
}
</style> 