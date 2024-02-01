// vue路由和异步组件

// 前端路由
// 路由是有服务端控制的
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...routes]
})
router(path, callback) {
  this.routes[path] = callback || function () {}
}