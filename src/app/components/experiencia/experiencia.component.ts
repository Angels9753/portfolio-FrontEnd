import { Component, OnInit } from '@angular/core';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Experiencia } from 'src/app/model/experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {
  expe : Experiencia[]=[];

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();

    if(this.tokenService.getToken()){
      this.isLogged=true;
    } else {
      this.isLogged=false;
    }
}
cargarExperiencia():void{
  this.sExperiencia.list().subscribe(data=> {this.expe =data;}
  )
}

delete(id?: number){
  if(id != undefined){
    this.sExperiencia.delete(id).subscribe(
      data => {
        this.cargarExperiencia();
      }, err => {
        alert("No se pudo borrar la experiencia");
      }
    )
  }
}
}



