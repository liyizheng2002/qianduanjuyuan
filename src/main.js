import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import api from './api' /* 引入aip */
import './utils/rem'
import './assets/css/reset.css'
import 'vant/lib/index.css'
Vue.use(Vant)
Vue.config.productionTip = false
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
