import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import axios from 'axios'
import axios from './axiosAuth'
import store from './store/store'
import * as types from './store/types'
import './plugins/element.js'


Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$types = types

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
