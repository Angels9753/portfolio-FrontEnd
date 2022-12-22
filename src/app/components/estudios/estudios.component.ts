import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/token.service';
import { Estudio } from 'src/app/model/estudio';
import { SEstudioService } from 'src/app/servicios/s-estudio.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  estu : Estudio[]=[];

  constructor(private sEstudio: SEstudioService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarEstudio();

    if(this.tokenService.getToken()){
      this.isLogged=true;
    } else {
      this.isLogged=false;
    }
}
cargarEstudio():void{
  this.sEstudio.list().subscribe(data=> {this.estu =data;}
  )
}

delete(id?: number){
  if(id != undefined){
    this.sEstudio.delete(id).subscribe(
      data => {
        this.cargarEstudio();
      }, err => {
        alert("No se pudo borrar el Estudio");
      }
    )
  }
}
}



