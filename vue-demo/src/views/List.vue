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
  readonly emojiList = ['😊', '😂', '❤️', '😍', '😒'] // 0, 1, 2, 3, 4
  // 用户输入的关键字
  search = '';
  // 请求到的原始数据
  textList: DetailInfo[] = []

  get currentList () {
    // 关键字搜索后实际要展示的列表
    return this.textList.filter(item  => item.title.indexOf(this.search) > -1 )
  }

  getRamdomEmoji() {
    // 获取随机的emoji表情
    const ramdomIndex = Math.floor(Math.random() * 5) // Math.random() 是 [0, 1), *5 就是 [0, 5)
    return this.emojiList[ramdomIndex]
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
.input-container {
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
.list-container {
  .list-item {
    background: white;
    box-shadow: 0 0 1rem rgba(144, 144, 144, 0.15);
    height: 10rem;
    border-radius: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    margin-top: 1.5rem;
    .left-section {
      width: 7rem;
      height: 7rem;
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 2.5rem;
      font-weight: bold;
      color: white;
      background: #6ab6fc;
      border-radius: 1rem;
    }
  }
}
</style> 