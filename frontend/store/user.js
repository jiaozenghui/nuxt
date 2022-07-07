import axios from 'axios'
export const state =()=>({
    token: ''
})

export const mutations = {
    init(state, payload) {
        state[payload.key] = payload.value
    }
}

export const getter = {
    isLogin(state) {
        return !!state.token
    }
}

export const actions = {
    setToken({ commit, getters }, result) {
        commit('init', {
            key: 'user',
            value: result.user,
        })
        commit('init', {
            key: 'token',
            value: result.token,
        })
        this.$cookies.set('token', result.token, {
            maxAge: 60 * 60 * 24 * 1
        })
        this.$cookies.set('user', result.user, {
            maxAge: 60 * 60 * 24 * 1
        })
    }
}