import Vue from 'vue'
import App from './App.vue'
import store from './store'

import vxModel from '@/directive/vx-model.js'
Vue.use(vxModel)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
