import { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";

export const authInterceptor = {
    request: (config: InternalAxiosRequestConfig) => {
        
        const token = localStorage.getItem('token')
        
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }

        return config;
      },
    error: (error: AxiosRequestConfig) => {
        console.log(error)        
        return Promise.reject(error)
    } 
}