import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    username: null,
    email: null
  },
  getters: {
    idToken: state => state.idToken,
    logout: state => state.idToken = null
  }
  
})