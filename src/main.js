// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'; // element组件
import 'element-ui/lib/theme-chalk/index.css';

import 'font-awesome/css/font-awesome.css'//font-awesome

import "@/assets/styles/common.css" // 全局样式
require('animate.css'); // 引入css动画库

import vueCanvas from 'vue-canvas-effect'; // 一个canvas库
Vue.use(vueCanvas)

import "./router/progress.js" // 路由拦截

Vue.config.productionTip = false

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
