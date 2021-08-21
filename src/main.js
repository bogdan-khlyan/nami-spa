import Vue from 'vue'
import App from './App.vue'
import router from "@/config/router"
import store from "@/config/store"
import axios from 'axios'

import 'element-ui/lib/theme-chalk/index.css'
import ElementsUI from 'element-ui'
import {Loading} from 'element-ui'
import {Notification} from 'element-ui'
import {MessageBox} from 'element-ui'

import VueScrollTo from 'vue-scrollto'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
import VueMask from 'v-mask'

Vue.use(VueMask);

import { VueMaskDirective } from 'v-mask'
Vue.directive('mask', VueMaskDirective);

Vue.use(PerfectScrollbar)
Vue.use(VueScrollTo)

Vue.use(ElementsUI, Loading, Notification, MessageBox)

axios.defaults.baseURL = process.env.VUE_APP_BACKEND_HOST
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.interceptors.request.use( function (config) {
  /*
  if (store.state.user.loggedIn) {
    const token = store.state.user.jwt;
    config.headers.common['Authorization'] = `Bearer ${token}`;
    // config.headers.authorization = localStorage.getItem("token");
  }

   */
  return config;
});
axios.interceptors.response.use(undefined, (error) => {
  /*
  if (error.response.status === 401) {
    store.dispatch('logOut');
  }
  if (error.response.status === 403) {
    router.push('/spa/not-auth');
  }

   */
  return Promise.reject(error)
})
Vue.prototype.$http = axios


Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
