<template>
  <div class="home">
    <slider />
    <baner />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Slider from '@/components/Slider.vue'; // @ is an alias to /src
import Banner from '@/components/Banner.vue';

@Options({
  components: {
    Slider,
    Banner
  },
})
export default class HomeView extends Vue {
  readonly BANNER_LIST = [ // 只读属性，用常量命名
    "https://img.tukuppt.com//ad_preview/00/11/13/5c9940242bf11.jpg!/fw/780",
    "https://img.tukuppt.com//ad_preview/00/03/56/5c98abb074bdd.jpg!/fw/780",
    "https://img.tukuppt.com//ad_preview/00/10/15/5c992911709f7.jpg!/fw/780",
    "https://img.tukuppt.com//ad_preview/00/19/70/5c9a0504de105.jpg!/fw/780",
    "http://pic.616pic.com/bg_w1180/00/14/61/bjDQ7hTsKA.jpg!/fw/1120",
    "https://img.tukuppt.com//ad_preview/00/10/15/5c992911709f7.jpg!/fw/780",
    "https://img.tukuppt.com//ad_preview/00/19/70/5c9a0504de105.jpg!/fw/780",
    "http://pic.616pic.com/bg_w1180/00/14/61/bjDQ7hTsKA.jpg!/fw/1120"
  ];
}
</script>
