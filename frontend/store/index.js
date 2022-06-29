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
    console.log('session')
    console.log(res.session)
    console.log('end')
    if (req.session && req.session.user) {
      commit('setData', {
        key: 'user',
        value: req.session.user
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
    const { result } = await ajax.get('/projects', {
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
  async login({ commit, dispatch }, body) {
    const result = await ajax.post('/user/signin', body)
    result.success == true &&commit('setData', {
      key: 'user',
      value: result.user,
    })
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
