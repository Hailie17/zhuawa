import axios from "axios";

export default class Services {
  static init () {
    axios.defaults.baseURL = 'https://www.fastmock.site/mock/091ed7b7b0b6115a7da81c9b77b7725d/index'
  }
}