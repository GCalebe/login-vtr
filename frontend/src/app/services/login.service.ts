import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable(
    {
        providedIn: "root"
    }
)

export class LoginService{

    constructor(private httpClient: HttpClient){}

    // private readonly baseURL = environment["endPoint"];

    loginUsuario(objeto: any) {
        return this.httpClient.post(`http://localhost:3000/api/auth/signin`, objeto);
    }
}