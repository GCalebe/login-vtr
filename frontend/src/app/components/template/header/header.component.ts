import { Component } from '@angular/core';
import { UsuarioModel } from '../../../models/UsuarioModel';
import { AuthenticateService } from '../../../services/authenticate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  usuario = new UsuarioModel();

  constructor(
    private authenticateService: AuthenticateService
  ) { }

  ngOnInit(): void {
    this.usuario.id = this.authenticateService.obterIdUsuario()!;
    this.usuario.username = this.authenticateService.obterUsername()!;
    console.log(this.usuario.username);
    this.usuario.email = this.authenticateService.obterEmail()!;
    this.usuario.accessToken = this.authenticateService.obterToken()!;
  }
}
