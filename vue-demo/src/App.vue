<template>
  <div id="app">
    <router-view/>
  </div>
</template>

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
@media screen and (min-width: 338px) {
  html {
    font-size: 14px !important;
  }
}
</style>
