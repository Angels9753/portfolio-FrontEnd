import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-edit-conoceme',
  templateUrl: './edit-conoceme.component.html',
  styleUrls: ['./edit-conoceme.component.css'],
})
export class EditConocemeComponent implements OnInit {
  per: persona = null;
  desc = '';

  constructor(
    private sPersona: PersonaService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.detail(id).subscribe(
      (data) => {
        this.per = data;
        this.desc=this.per.descripcion;
      },
      (err) => {
        alert('Error al modificar perfil');
        this.router.navigate(['']);
      }
    );
  }

  escribirTexto(desc: any):void{
    this.per.descripcion=desc;
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.update(id, this.per).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al modificar perfil');
        this.router.navigate(['']);
      }
    );
  }



}
