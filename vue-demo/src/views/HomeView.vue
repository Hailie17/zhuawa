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
export default class HomeView extends Vue {}
</script>
