import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  pers: persona = null;
  public loading : boolean;

  constructor(
    public personaService: PersonaService,
    private tokenService: TokenService) {
      this.loading=true;
    }

  isLogged = false;

  ngOnInit(): void {
    //this.Temporizador();
    this.cargarPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona(){
    this.personaService.detail(1).subscribe(data =>
      {this.pers=data;
      if(!this.pers){
        alert('Error en el servidor');
      }else{this.loading=false;}
    }
      )
  }

  //Esta funcion es para probar en forma local el Spinner
  Temporizador() {
        setTimeout (() => {
         this.cargarPersona();
      }, 10000);
  }

}
