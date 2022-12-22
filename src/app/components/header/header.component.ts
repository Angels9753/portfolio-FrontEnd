import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLogged = false;
  constructor(private router: Router, private tokenService: TokenService) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  seVe: boolean = false;
  click3puntos(): void {
    this.seVe = !this.seVe;
  }

  onLogOut():void{
    this.seVe = !this.seVe;
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    this.seVe = !this.seVe;
    //this.router.navigate(['/login'])
  }

}
