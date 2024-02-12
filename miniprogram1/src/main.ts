import Vue from 'vue'
import App from './App.vue'
import './uni.promisify.adaptor'
import store from './store'

Vue.config.productionTip = false

const app = new App({store})
app.$mount();
