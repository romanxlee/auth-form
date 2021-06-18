import Vue from 'vue'
import Vuex from 'vuex'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  Vuex,
  Buefy,
  render: h => h(App),
}).$mount('#app')
