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
  async nuxtServerInit({ commit, dispatch }, { req, res }) {
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
