import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import myHeader from '@/components/Header';
import myAside from '@/components/Aside';

axios.defaults.baseURL = 'http://localhost:8081';
axios.defaults.withCredentials = true;

Vue.prototype.axios = axios;
Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.component('my-header', myHeader);
Vue.component('my-aside', myAside);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
