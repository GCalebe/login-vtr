import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { AuthenticateService } from "../services/authenticate.service";
import { Injectable } from "@angular/core";

@Injectable()

export class Interceptor implements HttpInterceptor {

    constructor(private authenticateService: AuthenticateService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let headers;
        if (req.body instanceof FormData) {
            headers: new HttpHeaders(
                {
                    contentType: "false",
                    processData: "false",
                    Authorization: "Bearer " + this.authenticateService.obterToken()
                }
            )
        } else {
            headers = new HttpHeaders()
                .append("accept", "aplication/json")
                .append("Content-Type", "application/json; charset=utf-8")
                .append("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept")
        }

        let request = req.clone({headers});

        return next.handle(request).pipe(
            map((event) =>{
                return event
            })
        )
    }
}