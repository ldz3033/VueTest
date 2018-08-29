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
        },
        removeCustomer(state, data) {
            state.customers.forEach((item, index) => {
                if (item.id == data) {
                    state.customers.splice(index, 1);
                }
            })
        }
    },
    actions: {}
})
