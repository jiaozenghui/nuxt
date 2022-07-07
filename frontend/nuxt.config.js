export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Jzh个人博客',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description',
       content: "Jzh个人博客，nodejs学习分享，js,html,css,angularjs,vue框架的学习和分享，彩铅学习分享"},
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'keywords', content: '个人博客,Jzh个人博客,js,css,前端技术，彩铅' },
      { name: 'viewport', content: 'width=device-width, minimum-scale=1.0, maximum-scale=1.0' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'images/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/styles/base.css',
    '~/static/styles/iconfont.css',
    {src:'~/static/styles/main.scss', lang: 'scss'}
  ],
  loading: { color: '#2152F3' },
  styleResources: {
    scss: [
      '~/static/styles/variables.scss',
      '~/static/styles/main.scss'
    ]
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/static/styles/iconfont/iconfont.js', ssr: false},
    {src: "~/plugins/interceptor.js"},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/proxy',
    '@nuxtjs/style-resources',
    'cookie-universal-nuxt'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },
  proxy: {
    '/articles': {
      target: 'http://localhost:3001',
      changeOrigin: true
    },
    '/user': {
      target: 'http://localhost:3001',
      changeOrigin: true
    },
    '/libs/ueditor/ue': {
      target: 'http://localhost:3001',
      changeOrigin: true
    }
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
