import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from '../../models/LoginModel';
import { AuthenticateService } from '../../services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    public loginService: LoginService,
    private authenticateService: AuthenticateService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group(
      {
        username: ['', [Validators.required]],
        password: ['', [Validators.required]]
      }
    );
  }

  login() {
    var dadosLogin = this.loginForm.getRawValue() as LoginModel;

    console.log(dadosLogin);
    this.loginService.loginUsuario(dadosLogin)
      .subscribe(
        token => {
          let tokenUsuario: any = token;
          console.log(tokenUsuario.token);
          this.authenticateService.definirToken(tokenUsuario.token);
          this.router.navigate(["/index"]);
        },
        erro => {
          alert("Usuario ou senha incorreta!")
        })
  }
}