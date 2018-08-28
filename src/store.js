import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        customers: []
    },
    mutations: {
        setCustomers(state, data) {
            state.customers = data;
        }
    },
    actions: {}
})
