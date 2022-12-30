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
      },
      (err) => {
        alert('Error al modificar perfil');
        this.router.navigate(['']);
      }
    );
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
/*
  public onValueChange(event: Event): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.update(id, this.per).subscribe((data) => {
      this.desc = this.per.descripcion;
      console.log(this.desc);
      console.log(event.target);
      const value = (event.target as any).value;
      this.desc = value;
    });
  }
  */
}
