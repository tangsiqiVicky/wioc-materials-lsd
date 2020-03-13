import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'jquery'//
//引入ceharts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
// 引入组件
import wioc from '../src'
Vue.use(wioc)

import Axios from 'axios'
Vue.prototype.$axios = Axios

import store from '../store/index'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
//引入jquery

// Vue.use(jquery)
// 引入demo-block
import DemoBlock from './components/demoBlock'
Vue.component('demo-block', DemoBlock)
// 引入项目样式入口
import './assets/less/index.less'
/* 引入代码高亮样式 */

import 'highlight.js/styles/color-brewer.css';
import './assets/less/theme/00052f/index.less';
import './assets/less/theme/e7e4f1/index.less';
import './assets/less/theme/ffffff/index.less';
// 引入路由
import routes from './route'
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  render(createElement) {
    return createElement(App)
  },
  router,
  store,
}).$mount('#app')

//修改router-link点击两次报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

