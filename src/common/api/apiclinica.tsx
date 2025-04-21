import { AuthResponse } from '../../interfaces/responses/auth.interface';
import { AppConfig } from '../config/app-config';
import { HttpClient } from '../http/http-client';


class ApiClinica {
     private httpservice: HttpClient

    constructor() {
        this.httpservice = new HttpClient(AppConfig.HOST_BASE)
    }

    async login(user: string, pasword: string){
        try{
            const dataEnv = {user: user, pasword: pasword}
            const { data } = await this.httpservice.post<AuthResponse>('Auth',  dataEnv)
            return data.rows.token
        }catch(error){
            console.log(error)
            throw new Error('Error al iniciar session ... ')
        }
    }
}
