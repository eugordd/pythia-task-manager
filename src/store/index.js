import Vue from 'vue';
import Vuex from 'vuex'

import API from '../services'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isLoggedIn: false,
        profile: {},
        tasks: {}
    },
    actions: {
        async login({ commit }, payload) {
            const data = await API.login(payload)
            commit('setLoggedIn', true)
            commit('setToken', data.token);
        },
        logout({ commit }) {
            commit('setLoggedIn', false)
            commit('setToken', '')
        },
        async getProfile({ commit }) {
            const data = await API.getProfile()
            commit('setProfile', data)
        },
        async getTasks({ commit }) {
            const data = await API.getTasks()
            commit('setTasks', data)
        },
        async changeTaskStatus({ dispatch }, payload) {
            await API.changeTaskStatus(payload)
            dispatch('getTasks')
        },
        async addTask({ dispatch }, payload) {
            await API.addTask(payload)
            dispatch('getTasks')
        }
    },
    mutations: {
        setLoggedIn(state, status) {
            state.isLoggedIn = status
        },
        setToken (state, token) {
            localStorage.setItem('token', token)
        },
        setProfile(state, profile) {
            state.profile = profile
        },
        setTasks(state, tasks) {
            state.tasks = tasks
        }
    },
    getters: {
        isLoggedIn: state => state.isLoggedIn,
        profile: state => state.profile,
        tasks: state => state.tasks
    }
})

export default store