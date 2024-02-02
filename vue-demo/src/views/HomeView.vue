<template>
  <div class="home">
    <slider />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Slider from '@/components/Slider.vue'; // @ is an alias to /src

@Options({
  components: {
    Slider,
  },
})
export default class HomeView extends Vue {}
</script>
