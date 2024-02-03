<template>
  <img :src="src" alt="banner" class="banner-img">
</template>
<script lang="ts">
import { Options, Vue, prop } from 'vue-class-component';

export default {
  props: {
    src: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.banner-img {
  width: 100%;
  height: 14rem; // 140px
  border-radius: 0.5rem;
}
</style>