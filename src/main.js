import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
axios.defaults.baseURL = "http://192.168.7.149:3000"
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
