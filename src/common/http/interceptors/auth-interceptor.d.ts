import { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
export declare const authInterceptor: {
    request: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig<any>;
    error: (error: AxiosRequestConfig) => Promise<never>;
};
