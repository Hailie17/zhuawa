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
    component: HomeView
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
