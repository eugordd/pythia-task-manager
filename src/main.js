import Vue from 'vue'
import axios from 'axios'

import store from './store'
import router from './router'
import { onSuccess, onError, beforeRequestSuccess, beforeRequestError } from './interceptors/jwt'

import App from './App.vue'

Vue.config.productionTip = false

axios.interceptors.response.use(onSuccess, onError);
axios.interceptors.request.use(beforeRequestSuccess, beforeRequestError);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
