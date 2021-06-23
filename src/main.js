import Vue from 'vue'
import store from '@/store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  Buefy,
  store,
  render: h => h(App),
}).$mount('#app')
