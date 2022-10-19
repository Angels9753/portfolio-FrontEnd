import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-conoceme',
  templateUrl: './conoceme.component.html',
  styleUrls: ['./conoceme.component.css']
})
export class ConocemeComponent implements OnInit {
  miPorfolio:any;
  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {

    this.datosPorfolio.obtenerDatos().subscribe(data =>{

      this.miPorfolio=data;
    });
  }
  seVeBoton: boolean = true;

  clickEdit(): void {
    this.seVeBoton = !this.seVeBoton;
  }  
}
