import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import myheader from './components/myheader.vue'
import myfooter from './components/myfooter.vue';

axios.defaults.baseURL = 'http://192.168.7.100:81';
axios.defaults.withCredentials = true;

Vue.prototype.axios = axios;
Vue.use(ElementUI);

Vue.component("myheader",myheader);
Vue.component("myfooter",myfooter);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
