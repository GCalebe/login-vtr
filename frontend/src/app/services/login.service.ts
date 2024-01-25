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

    loginUsuario(objeto: any) {
        console.log(objeto);
        return this.httpClient.post(`http://localhost:3000/signin`, objeto);
    }
}