import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-conoceme',
  templateUrl: './conoceme.component.html',
  styleUrls: ['./conoceme.component.css'],
})
export class ConocemeComponent implements OnInit {
  pers: persona = null;

  constructor(
    public personaService: PersonaService,
    private tokenService: TokenService) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona(){
    this.personaService.detail(1).subscribe(data =>
      {this.pers=data}
      )
  }


}
