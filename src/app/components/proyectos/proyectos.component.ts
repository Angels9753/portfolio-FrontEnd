import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  ProyectosList:any;
  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {

    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      
      this.ProyectosList=data.proyectos;
    });
  }
  seVeBoton: boolean = true;

  clickEdit(): void {
    this.seVeBoton = !this.seVeBoton;
  }  
}
