import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    role: 'guest'
  },
  mutations: {
    role: (state, connections) =>
      {state.role = connections}
  },
  actions: {
    login() {
      axios.get('http://localhost:3000/users')
      .then()
    }
  }
})