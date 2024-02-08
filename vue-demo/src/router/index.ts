import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const List = () => import(/* webpackChunkName: "list" */ '../views/List.vue')
const Detail = () => import(/* webpackChunkName: "detail" */ '../views/Detail.vue')

export enum RouteNames {
  Home = 'Home',
  List = 'List',
  Detail = 'Detail'
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      depth: 1
    }
  },
  {
    path: '/list',
    name: 'List',
    component: List,
    meta: {
      depth: 2
    }
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
    meta: {
      depth: 3
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
