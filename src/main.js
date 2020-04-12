import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "@/stylesheets/main.scss"

import "@/utils/rem"

import "@/utils/directives"
import "@/utils/filter"
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
