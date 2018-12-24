import Vue from 'vue'
import VueRouter from 'vue-router'

import AppLayout from '@/layouts/AppLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

import TasksListPage from '@/pages/TasksListPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import ProfilePage from '@/pages/ProfilePage.vue'

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
                path: 'app', 
                component: AppLayout,
                beforeEnter: ifNotAuthorized,
                children: [
                    {
                        path: '',
                        component: TasksListPage,
                        name: 'tasks'
                    },
                    {
                        path: 'profile',
                        component: ProfilePage,
                        name: 'profile'
                    }
                ]
            },
            { 
                path: '',
                component: AuthLayout, 
                beforeEnter: ifAuthorized,
                children: [
                    {
                        path: 'login',
                        component: LoginPage,
                        name: 'login'
                    }
                ]
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
