import axios from 'axios'
import Vue from 'vue'

const isServer = Vue.prototype.$isServer || process.server
const baseURL = 'http://localhost:3000'
const ajax = axios.create({
  baseURL,
  responseType: 'json',
  withCredentials: true,
})

ajax.interceptors.response.use((response) => {
  const { data } = response
  if (data && !isServer && !data.success) {
    console.log(data)
  }
  return data
}, error => Promise.reject(error))


export const actions = {
  async nuxtServerInit({ commit, dispatch }, { req, res, app }) {
    const token = this.$cookies.get("token")
    if (token) {
      commit('setData', {
        key: 'token',
        value: token
      })
    }
    await Promise.all([
      dispatch('getCategories')
    ])
  },
  /**
   * category api
   */
  async getCategories({ commit, state }) {
    const { result } = await ajax.get('/articles', {
    })
    commit('setData', {
      key: 'categories',
      value: result,
    })
    return result
  },
  async signup({ commit, dispatch }, body) {
    const result = await ajax.post('/user/signup', body)
    return result
  },

  async logout({ commit }) {
    await ajax.post('/logout')
    // 清除token
    commit('setData', {
      key: 'token',
      value: '',
    })
  }
}




export const mutations = {
  setData(state, payload) {
    state[payload.key] = payload.value
  }
}

export const state = () => ({
  seo: {},
  email: {},
  admin: {},
  token: '',
  domain: baseURL,
  articles: [],
  articlesTop: [],
  articlesNew: [],
  total: 0,
  limit: 15,
  article: {},
  categories: [],
  category: {},
  comments: [],
  comment: {},
})
