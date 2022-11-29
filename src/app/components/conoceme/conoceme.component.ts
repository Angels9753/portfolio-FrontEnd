import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-conoceme',
  templateUrl: './conoceme.component.html',
  styleUrls: ['./conoceme.component.css']
})

export class ConocemeComponent implements OnInit {
  persona:persona=new persona("","","","","","","",false);

  constructor(public personaService:PersonaService){}
  
  

  ngOnInit(): void {

    this.personaService.getPersona().subscribe(data=>{this.persona=data})
    };
  }
  


/*
export class ConocemeComponent implements OnInit {
  miPorfolio:any;
  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {

    this.datosPorfolio.obtenerDatos().subscribe(data =>{

      this.miPorfolio=data.usuario;
    });
  }
   
}
*/
