import { Component } from '@angular/core';
import { AuthenticateService } from '../../../services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrl: './side.component.css'
})
export class SideComponent {

  constructor(
    private router: Router,
    private authenticateService: AuthenticateService
    ){}

  logout(){
    this.authenticateService.limparDadosUser()
    this.router.navigate(["/login"])
  }

}
