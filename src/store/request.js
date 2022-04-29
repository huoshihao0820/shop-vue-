import axios from 'axios'
// import router from '../router/index'
// import store from './index'
// import storage from './storage'


// create an axios instance
// console.log(this.$Http)

const service = axios.create({
    baseURL:'/api', // 根路径
    
    withCredentials: false, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})

// // request interceptor
// service.interceptors.request.use(
//     config => {
//         if (storage.getToken()) {
//             // 让每个请求携带自定义token 请根据实际情况自行修改
//             config.headers['Authorization'] = storage.getToken()
//             console.log('response', storage.getToken())
//         }
//         return config
//     },
//     error => {
//         // do something with request error
//         return Promise.reject(error)
//     }
// )

// // response interceptor
// service.interceptors.response.use(
//     /**
//      * If you want to get http information such as headers or status
//      * Please return  response => response
//      */

//     /**
//      * Determine the request status by custom code
//      * Here is just an example
//      * You can also judge the status by HTTP Status Code
//      */
//     response => {
//        // console.log('response', response)
//         if (response.headers.token) {
//             //如果后台通过header返回token，说明token已经更新，则更新客户端本地token
//             store.dispatch('app/toggleToken', response.headers.token)
//         }
//         const res = response.data
//         console.log('response', res)
//         if (res.code !== 20000) {
//             return Promise.reject(res.msg || 'error')
//         } else {
//             return res
//         }
//     },
//     error => {
//         if (error.response) {
//             switch (error.response.status) {
//                 case 401:
//                     //如果后台返回401，则清空本地用户信息信息并跳转至登录页
//                     store.dispatch('app/toggleUser', {})
//                     store.dispatch('app/toggleToken', '')
//                     router.replace({
//                         path: '/remind',
//                         query: {redirect: router.currentRoute.path}
//                     })
//                     return Promise.reject(error.response.data.message)
//                     break;
//                 case 500:
//                     if (error.response.data.message) {
//                         if (error.response.data.message.indexOf('relogin') > -1) {
//                             console.log('need relogin')
//                             store.dispatch('app/toggleUser', {})
//                             store.dispatch('app/toggleToken', '')
//                             router.replace({
//                                 path: '/remind',
//                                 query: {redirect: router.currentRoute.path}
//                             })
//                             return Promise.reject(error.response.data.message)
//                         } else {
//                             console.log(error.response.data.message)
//                             return Promise.reject(error.response.data.message)
//                         }
//                     }
//                     break;
//                 default:
//                     return Promise.reject(error.response.data.message)
//             }
//         }
//     }
// )

export default service
