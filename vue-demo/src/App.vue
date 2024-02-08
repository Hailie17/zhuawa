<template>
  <div id="app">
    <!-- 动画 -->
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>
<script lang="ts">
import { watch } from 'vue';
import { Options, Vue } from 'vue-class-component';

export default class Detail extends Vue {
  transitionName = '';

  @watch('$route') 
  onRouteChange(to, from) {
    this.transitionName = to.mata.depth > from.meta.depth ? 'slide-left' : 'slide-right'
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html {
  width: 100%;
  height: 100%;
  font-size: 10px;
}
body {
  margin: 1.5rem;
}
// 媒体查询
@media screen and (max-width: 338px) {
  html {
    font-size: 8px !important;
  }
}
@media screen and (min-width: 411px) {
  html {
    font-size: 11px !important;
  }
}
@media screen and (min-width: 450px) {
  html {
    font-size: 12px !important;
  }
}
@media screen and (min-width: 480px) {
  html {
    font-size: 14px !important;
  }
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: trasform;
  transition: transform 350ms;
  position: absolute;
  overflow: hidden;
}
.slide-right-enter,
.slide-left-leave-active {
  transform: translate(-100%, 0);
}
.slide-left-enter,
.slide-right-leave-active {
  transform: translate(100%, 0);
}
</style>
