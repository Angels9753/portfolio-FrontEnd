import { Component, OnInit } from '@angular/core';
import { SProyectoService } from 'src/app/servicios/s-proyecto.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Proyecto } from 'src/app/model/proyecto';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proy : Proyecto[]=[];

  constructor(private sProyecto: SProyectoService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();

    if(this.tokenService.getToken()){
      this.isLogged=true;
    } else {
      this.isLogged=false;
    }
}
cargarProyecto():void{
  this.sProyecto.list().subscribe(data=> {this.proy =data;}
  )
}

delete(id?: number){
  if(id != undefined){
    this.sProyecto.delete(id).subscribe(
      data => {
        this.cargarProyecto();
      }, err => {
        alert("No se pudo borrar el Proyecto");
      }
    )
  }
}
}



