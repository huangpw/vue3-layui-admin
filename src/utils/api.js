import axios from "axios";
import { TOKEN } from "./constant";


const service = axios.create({
    baseURL: '/api',
    timeout: 5000,
})

// 请求拦截器
service.interceptors.request.use(
    config => {
        if (localStorage.getItem(TOKEN)) { 
            config.headers['Authorization'] = localStorage.getItem(TOKEN)
            return config
        }
    }
), error => {
    return Promise.reject(new Error(error))
    }

// 响应拦截器
service.interceptors.response.use(
    response => {
        const { data, meta } = response.data
        if (meta.status === 200 || meta.status === 201) { 
            return data
        } else { 
            // TODO 弹出提示
        
            return Promise.reject(new Error(meta.msg))

        }
    }
), error => {
    // error.response && TODO 弹出提示
    return Promise.reject(new Error(error.response.data))
    }

export default service