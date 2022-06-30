import axios from 'axios'
export const state =()=>({
    token: ''
})

export const mutations = {
    init(state, token) {
        state.token = token
    }
}

export const getter = {
    isLogin(state) {
        return !!state.token
    }
}

export const actions = {
    async login({ commit, getters }, body) {
        const result = await axios.post('/user/signin', body)
        result.success == true &&commit('setData', {
          key: 'user',
          value: result.user,
        })
        localStorage.setItem('token', result.token)
        return result
    }
}