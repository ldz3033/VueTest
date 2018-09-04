import Vue from 'vue'
import Router from 'vue-router'


import CustomerDetails from './components/CustomerDetails'
import Edit from './components/Edit'
import Home from './views/Home'
import AddUser from './views/AddUser'
import About from './views/About'
import Login from './views/Login'
import store from './store/store'
import * as types from './store/types'
import {Message} from 'element-ui'


Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        //主页面
        {
            path: '/home',
            name: 'home',
            meta: {
                requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
            },
            component: Home
        },
        //关于产品
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
            component: About
        },

        //添加用户
        {
            path: "/add",
            name: 'add',
            meta: {
                requireAuth: true,
            },
            component: AddUser
        },

        //用户详情
        {
            path: '/customer/:id',
            name: 'detail',
            meta: {
                requireAuth: true,
            },
            component: CustomerDetails
        },

        //用户编辑
        {
            path: "/edit/:id",
            name: 'edit',
            meta: {
                requireAuth: true,
            },
            component: Edit
        },

        //登录
        {
            path: "/login",
            name: 'login',
            component: Login
        },
    ]
})


//重新刷新页面后vuex信息丢失, 将sessionStorage中的数据重新保存到vuex中
if (sessionStorage.getItem('Authorization')) {
    store.commit(types.LOGIN, sessionStorage.getItem('Authorization'));
}
if (sessionStorage.getItem('userName')) {
    store.commit(types.USERNAME, sessionStorage.getItem('userName'));
}

//路由权限控制
router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (store.state.token) {
            next();
        }
        else {
            next({
                name: 'login'
            })
            Message.warning('请先登录');
        }
    }
    else {
        next();
    }
})

export default router;