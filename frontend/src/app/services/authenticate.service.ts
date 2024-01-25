import { UsuarioModel } from './../models/UsuarioModel';
import { Injectable } from "@angular/core";


@Injectable(
    {
        providedIn: 'root'
    }
)

export class AuthenticateService{

    private Authenticate: boolean = false;

    public definirUsuarioLogado(usuario: UsuarioModel){
        sessionStorage.setItem('id', usuario.id);
        sessionStorage.setItem('username', usuario.username);
        sessionStorage.setItem('email', usuario.email);
        sessionStorage.setItem('token', usuario.accessToken);
    }

    public obterIdUsuario(){
       return sessionStorage.getItem('id');
    }

    public obterUsername(){
        return sessionStorage.getItem('username');
    }

    public obterEmail(){
        return sessionStorage.getItem('email');
    }

    public obterToken(){
        return sessionStorage.getItem('token');
    }

    public limparDadosUser(){
        sessionStorage.removeItem('id');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('token');
    }

    public isAuthenticate(){

    }
}