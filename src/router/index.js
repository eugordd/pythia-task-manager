import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import LoginPage from '../pages/LoginPage.vue'

import ifNotAuthorized from './helpers/ifNotAuthorized'
import ifAuthorized from './helpers/ifAuthorized'
import initApp from './helpers/initApp'

const routes = [
    { 
        path: '', 
        component: { 
            render (c) { return c('router-view') },
        },
        beforeEnter: initApp,
        children: [
            { 
                path: '', 
                component: HomePage,
                beforeEnter: ifNotAuthorized
            },
            { 
                path: '/login', 
                component: LoginPage, 
                beforeEnter: ifAuthorized
            }
        ]
    }
]

Vue.use(VueRouter)
const router = new VueRouter({
  scrollBehavior () { return {x: 0, y: 0} },
  mode: 'history',
  routes
})

export default router
