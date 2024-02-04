import axios from "axios";
import { HomeRecommendListItem } from "./types";

export default class Services {
  static init () {  // 定义了static静态方法，就不会走构造函数，而是直接执行静态方法
    axios.defaults.baseURL = 'https://www.fastmock.site/mock/091ed7b7b0b6115a7da81c9b77b7725d/index'
  }

  // 推荐列表
  static getRecommendList () {
    this.init()
    // 请求回来的结果 res.data 是 HomeRecommendListItem[] 类型的
    return axios.get<HomeRecommendListItem>('/homeRecommendList').then(res => res.data)
  }
}