import { Component, OnInit } from '@angular/core';
import { SkillBlanda } from 'src/app/model/skill-blanda';
import { SkillDura } from 'src/app/model/skill-dura';
import { SkillIdioma } from 'src/app/model/skill-idioma';
import { SSkillBlandaService } from 'src/app/servicios/s-skill-blanda.service';
import { SSkillDuraService } from 'src/app/servicios/s-skill-dura.service';
import { SSkillIdiomaService } from 'src/app/servicios/s-skill-idioma.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skib : SkillBlanda[]=[];
  skid : SkillDura[]=[];
  skii : SkillIdioma[]=[];

  constructor(private sSkillBlanda: SSkillBlandaService,private sSkillDura: SSkillDuraService, private sSkillIdioma: SSkillIdiomaService, private tokenService: TokenService) { }

  isLogged = false;
  
  ngOnInit(): void {
    this.cargarSkillBlanda();
    this.cargarSkillDura();
    this.cargarSkillIdioma();

    if(this.tokenService.getToken()){
      this.isLogged=true;
    } else {
      this.isLogged=false;
    }
}
cargarSkillBlanda():void{
  this.sSkillBlanda.list().subscribe(data=> {this.skib =data;}
  )
}
cargarSkillDura():void{
  this.sSkillDura.list().subscribe(data=> {this.skid =data;}
  )
}
cargarSkillIdioma():void{
  this.sSkillIdioma.list().subscribe(data=> {this.skii =data;}
  )
}

deleteSkillBlanda(id?: number){
  if(id != undefined){
    this.sSkillBlanda.delete(id).subscribe(
      data => {
        this.cargarSkillBlanda();
      }, err => {
        alert("No se pudo borrar la SkillBlanda");
      }
    )
  }
}

deleteSkillDura(id?: number){
  if(id != undefined){
    this.sSkillDura.delete(id).subscribe(
      data => {
        this.cargarSkillDura();
      }, err => {
        alert("No se pudo borrar la SkillDura");
      }
    )
  }
}
deleteSkillIdioma(id?: number){
  if(id != undefined){
    this.sSkillIdioma.delete(id).subscribe(
      data => {
        this.cargarSkillIdioma();
      }, err => {
        alert("No se pudo borrar la SkillIdioma");
      }
    )
  }
}


}
