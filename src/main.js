import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入重置样式
import '@/assets/css/cssreset-min.css'
// 引入自己的样式
import '@/assets/css/base.css'


// 引入vant组件库
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import api from '@/plugins/axios.js'
Vue.prototype.$api = api

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
