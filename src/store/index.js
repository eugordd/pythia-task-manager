import Vue from 'vue';
import Vuex from 'vuex'

import Auth from '../services/Auth'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isLoggedIn: false,
        profile: {}
    },
    actions: {
        login({ commit }, payload) {
            return Auth.login(payload)
                .then(data => {
                    commit('setLoggedIn', true)
                    commit('setToken', data.token);
                })
        },
        logout({ commit }) {
            commit('setLoggedIn', false)
            commit('setToken', '')
        },
        getProfile({ commit }) {
            return Auth.getProfile()
                .then(data => {
                    commit('setProfile', data)
                })
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
        }
    },
    getters: {
        isLoggedIn: state => state.isLoggedIn,
        profile: state => state.profile
    }
})

export default store