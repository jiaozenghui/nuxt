import Vue from 'vue'
import apiEntire from '@/api'

export default ({ app, $axios, store, redirect }, inject) => {
  $axios.defaults.baseURL = '项目地址'
  $axios.defaults.timeout = 5000

  // 请求拦截
  $axios.onRequest((config) => {
  	// 本项目token 存储在vuex里面 
      if (store.state.user.token) {
        config.headers.Authorization = "Bearer " + store.state.user.token
    }
  })

  // 服务器返回异常拦截
  $axios.onError((error) => {
    return error
  })

  // 接口数据返回拦截
  $axios.onResponse((response) => {
  	// 状态码异常 跳转到登陆
	// redirect('/login')
      return response.data
  })
	const API = {}
	  for (const i in apiEntire) {
	  	// 调用api时候的参数 
	  	// 第一位为 post参数 第二位为get参数
	    API[i] = function(data = '', params = '') {
	      const { url, method, headers } = { ...apiEntire[i] }
	      return $axios({
	        url,
	        method,
	        headers,
	        data,
	        params
	      })
	    }
	  }
	  app.api = API
	  inject('http', API)
}