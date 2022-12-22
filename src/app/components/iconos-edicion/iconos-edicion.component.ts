import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-iconos-edicion',
  templateUrl: './iconos-edicion.component.html',
  styleUrls: ['./iconos-edicion.component.css'],
})

export class IconosEdicionComponent implements OnInit {
  isLogged = false;
  constructor(private tokenService: TokenService) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

}