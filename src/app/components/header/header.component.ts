import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  seVe: boolean = false;

  click3puntos(): void {
    this.seVe = !this.seVe;
  }
  
  seVeBoton: boolean = false;

  clickEdit(): void {
    this.seVeBoton = !this.seVeBoton;
  }  
}
