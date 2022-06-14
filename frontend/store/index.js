import axios from 'axios'
import Vue from 'vue'

const isServer = Vue.prototype.$isServer || process.server
const baseURL = isServer ? `${process.env.DOMAIN}/api` : `${window.location.origin}/api`
const ajax = axios.create({
  baseURL,
  responseType: 'json',
  withCredentials: true,
})

ajax.interceptors.response.use((response) => {
  const { data } = response
  if (data && !isServer && !data.success) {
    alert(data.message)
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
    const { token } = state
    const { data } = await ajax.get('/user/get', {
      headers: {
        token,
      },
    })
    commit('setData', {
      key: 'categories',
      value: data,
    })
    return data
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
