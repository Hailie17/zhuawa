<template>
  <div class="video-container">
    <video v-for="item in videoList" :key="item" :src="item" controls preload="metadata"></video>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
    
  },
})
export default class VideoList extends Vue {
  videoList = [
    "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
    "http://vjs.zencdn.net/v/oceans.mp4",
    "https://www.w3school.com.cn/example/html5/mov_bbb.mp4",
    "https://vodprogressive.akamaized.net/exp=1590688030~acl=%2A%2F623661526.mp4%2A~hmac=6a569635b0dfd5f24b6acf31603b99819e0da93534a8a85cprod-skyfire-std-us/01/2684/7/188421287/623661526.mp4"
  ]

}
</script>
<style lang="less" scoped>
.video-container {
  width: 100%;
  margin-top: 2rem;

  video {
    margin-top: 1rem;
    width: 100%;
    height: 15rem;
  }
}
</style>
