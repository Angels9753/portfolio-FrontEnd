import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  EstudiosList:any;
  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {

    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      
      this.EstudiosList=data.estudios;
    });
  }
  seVeBoton: boolean = true;

  clickEdit(): void {
    this.seVeBoton = !this.seVeBoton;
  }  
}
