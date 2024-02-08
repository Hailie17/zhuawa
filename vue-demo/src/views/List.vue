<template>
  <div class="list-page">
    <div class="input-container">
      <input type="text" v-model="search" class="search" placeholder="请输入关键字搜索">
    </div>
    <div class="list-container">
      <div class="list-item" v-for="item in currentList" :key="item.id" @click="toDetail(item.id)">
        <div class="left-section">
          {{ getRamdomEmoji() }}
        </div>
        <div class="right-section">
          <span class="title">{{ item.title }}</span>
          <span class="content">{{ item.content }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Services from '@/services'
import { DetailInfo } from '@/services/types'
import { RouteNames } from '@/router';

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

  // computed 属性
  get currentList () {
    // 关键字搜索后实际要展示的列表
    return this.textList.filter(item  => item.title.indexOf(this.search) > -1 )
  }

  getRamdomEmoji() {
    // 获取随机的emoji表情
    const ramdomIndex = Math.floor(Math.random() * 5) // Math.random() 是 [0, 1), *5 就是 [0, 5)
    return this.emojiList[ramdomIndex]
  }
  

  1

  toDetail(id: number) {
    // TODO 跳转到详情页
    this.$router.push({
      name: RouteNames.Detail,
      params: {
        id: String(id)
      }
    })
  }

  async created() {
    this.textList = await Services.getList()
    console.log(this);
    
    // this.$store.commit('setDetailInfo', this.textList)
  }
}
</script>
<style lang="less" scoped>
.input-container {
  position: sticky;
  top: 0;
  height: 6rem;
  background: white;
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
    .right-section {
      margin-left: 1rem;
      flex: 1; // 占据剩下的所有空间
      display: flex;
      // align-items: center;
      justify-content: center;

      flex-direction: column;

      .title {
        font-size: 1.4rem;
        font-weight: 500;
        text-align: left;
      }
      .content {
        font-size: 1.2rem;
        font-weight: 400;
        text-align: left;

        // 展示两行，超出部分省略号
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        overflow: hidden;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style> 