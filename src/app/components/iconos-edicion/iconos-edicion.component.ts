import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-iconos-edicion',
  templateUrl: './iconos-edicion.component.html',
  styleUrls: ['./iconos-edicion.component.css'],
})

export class IconosEdicionComponent implements OnInit {
  miPorfolio:any;
  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {

    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      
      this.miPorfolio=data;
      console.log(data.usuario);
    });
  }
}
