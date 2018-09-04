import axios from 'axios'
import store from './store/store'
import * as types from './store/types'
import router from './router'
import {Message} from 'element-ui'

const instance = axios.create({
    baseURL: "http://192.168.7.147:8082",
})

instance.interceptors.request.use(
    config => {
        if (store.state.token) {
            config.headers.Authorization = store.state.token;
        }
        return config;
    },
    error => {
        return Promise.reject(error.response.data);
    });

instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        //对token过期的处理还存在问题
        /*        if (error.response) {
                    if (error.response.data.exception) {
                        alert("用户名或密码错误");
                    } else {
                        // 清除token,跳转到登录页面
                        store.commit(types.LOGOUT);
                        router.replace({
                            path: '/login'
                        })
                    }
                }
                else {
                    store.commit(types.LOGOUT);
                    router.replace({
                        path: '/login'
                    })
                }*/

        if (error.response) {
            if (error.response.data.status == 1) {
                Message.error("密码错误");
            }
            else {
                // 清除token,跳转到登录页面
                store.commit(types.LOGOUT);
                router.replace({
                    name: 'login'
                })
            }
        }
        return Promise.reject(error);
        //return new Promise(()=>{});
    });
export default instance;