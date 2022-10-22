import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  
  constructor(private datosPorfolio: PorfolioService) {}

  ngOnInit(): void {  }
  
  esAdmin: any;
  llamaClick(): void {
      
   this.esAdmin = this.datosPorfolio.clickEdit();
    alert('data head comp llega:'+this.esAdmin);   
    
    };  
 
  seVe: boolean = false;
  click3puntos(): void {
    this.seVe = !this.seVe;
  }

  /* seVeBoton: boolean = false;

  clickEdit(): void {
    this.seVeBoton = !this.seVeBoton;
  }  */
}
