import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { authInterceptor } from "./interceptors/auth-interceptor";

export class HttpClient {
    private client: AxiosInstance;

    constructor(apiHost: string) {
        this.client = axios.create({
            baseURL: apiHost,
            timeout: 1000,            
        });
        this.setUpInterceptor()
    }
    private setUpInterceptor() {
        this.client.interceptors.request.use(
            authInterceptor.request,
            authInterceptor.error
        )
    }

    async get<T>(url:string, config: AxiosRequestConfig = {}) {
        return this.client.get<T>(url, config)
    }

    async post<T>(url:string, data:object, config: AxiosRequestConfig = {}) {
        return this.client.post<T>(url, data, config)
    }

}


