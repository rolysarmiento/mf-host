import { AxiosRequestConfig } from "axios";
export declare class HttpClient {
    private client;
    constructor(apiHost: string);
    private setUpInterceptor;
    get<T>(url: string, config?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<T, any>>;
    post<T>(url: string, data: object, config?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<T, any>>;
}
