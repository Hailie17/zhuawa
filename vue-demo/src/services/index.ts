import axios from "axios";

export default class Services {
  static init () {  // 定义了static静态方法，就不会走构造函数，而是直接执行静态方法
    axios.defaults.baseURL = 'https://www.fastmock.site/mock/091ed7b7b0b6115a7da81c9b77b7725d/index'
  }
}