import axios from 'axios'
// import settings from '@/settings'

const http = axios.create({
    baseURL: 'http://localhost:5173',
    timeout: 10000
})

// 请求拦截器
http.interceptors.request.use(
    config => {
        let token = localStorage.getItem('token')
        token = token || 'test token' // test
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        console.log('>>> http request', config)
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 响应拦截器
http.interceptors.response.use(
    response => {
        // do something with response
        return response
    },
    error => {
        if (error.response) {
            if (error.response.status === 401) {
                console.error('Unthorized')
            } else if (error.response.status === 403) {
                console.error('CORS')
            }  
        }
        return Promise.reject(error)
    }
)

export default http