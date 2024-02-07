import axios from "axios";
import { HomeRecommendListItem, DetailInfo } from "./types";

export default class Services {
  static init () {  // 定义了static静态方法，就不会走构造函数，而是直接执行静态方法
    axios.defaults.baseURL = 'https://dev.usemock.com/65c38c346309cc7a37742956'
  }

  // 首页推荐列表
  static async getRecommendList () {
    this.init()
    // 请求回来的结果 res.data 是 HomeRecommendListItem[] 类型的
    return axios.get<HomeRecommendListItem[]>('/homeRecommendList').then(res => res.data)
  }

  // 列表
  static async getList () {
    this.init()
    return axios.get<DetailInfo[]>('/list').then(res => res.data)
  }
}