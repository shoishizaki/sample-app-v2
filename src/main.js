import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import Header from "./components/global/Header.vue";
import Footer from "./components/global/Footer.vue";

Vue.config.productionTip = false;

Vue.component("Header", Header);
Vue.component("Footer", Footer);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
