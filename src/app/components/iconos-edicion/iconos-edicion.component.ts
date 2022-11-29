import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-iconos-edicion',
  templateUrl: './iconos-edicion.component.html',
  styleUrls: ['./iconos-edicion.component.css'],
})

export class IconosEdicionComponent implements OnInit {
  persona:persona=new persona("","","","","","","",false);

  constructor(public personaService:PersonaService){}
  
  

  ngOnInit(): void {

    this.personaService.getPersona().subscribe(data=>{this.persona=data})
    };
  }













  /*
  miPorfolio:any;
  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
       this.miPorfolio=data.usuario
    });
  }
}
*/

