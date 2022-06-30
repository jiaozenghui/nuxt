export default function({$axios, store}, inject) {
    $axios.onRequest(config=>{
        console.log('onRequest')
        if (store.state.user.token) {
            config.headers.Authorization = "Bearer " + store.state.user.token
        }
        return config
    })
    $axios.onResponse((response) => {
        console.log('response')
        return response.data
    })
}