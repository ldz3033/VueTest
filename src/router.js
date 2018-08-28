import Vue from 'vue'
import Router from 'vue-router'


import CustomerDetails from './components/CustomerDetails'
import Edit from './components/Edit'
import Home from './views/Home'
import AddUser from './views/AddUser'
import About from './views/About'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
            component: About
        },
        //{path:"/",component:Customers},
        {path: "/add", component: AddUser},
        {path: "/customer/:id", component: CustomerDetails},
        {path: "/edit/:id", component: Edit},
    ]
})
