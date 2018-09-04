import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        customers: [],
        alert: "",
        token: null,
        userName: "",
    },
    getters: {}
    ,
    mutations: {
        [types.SETCUSTOMERS]: (state, data) => {
            state.customers = data;
        },
        [types.REMOVECUSTOMERS]: (state, data) => {
            state.customers.splice(
                state.customers.findIndex(item => item.id == data), 1);
        },
        [types.SETALERT]: (state, data) => {
            state.alert = data;
        },
        [types.REMOVEALERT]: (state) => {
            state.alert = "";
        },
        [types.LOGIN]: (state, data) => {
            state.token = data;
            sessionStorage.Authorization = data;
        },
        [types.LOGOUT]: (state) => {
            state.token = null
            sessionStorage.removeItem('Authorization');
        },
        [types.USERNAME]: (state, data) => {
            state.userName = data
            sessionStorage.userName = data;
        }
    },
    actions: {}
})
