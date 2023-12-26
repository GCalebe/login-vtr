import { Injectable } from "@angular/core";

@Injectable(
    {
        providedIn: 'root'
    }
)

export class AuthenticateService
{
    private Authenticate: boolean = false;

    public definirToken(token: string){
        sessionStorage.setItem('token', token);
    }

    public obterToken(){
        sessionStorage.getItem('token');
    }

    public limparToken(){
        sessionStorage.removeItem('token');
    }
}