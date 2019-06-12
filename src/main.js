import Vue from 'vue'
import App from './App.vue'
import store from './store'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
import 'element-ui/lib/theme-chalk/index.css'
import vxModel from '@/directive/vx-model.js'
Vue.use(vxModel)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
