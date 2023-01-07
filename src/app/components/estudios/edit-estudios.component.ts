import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudio } from 'src/app/model/estudio';
import { SEstudioService } from 'src/app/servicios/s-estudio.service';


@Component({
  selector: 'app-edit-estudios',
  templateUrl: './edit-estudios.component.html',
  styleUrls: ['./edit-estudios.component.css']
})
export class EditEstudiosComponent implements OnInit {
estCur: Estudio = null;

 constructor(private sEstudio: SEstudioService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEstudio.detail(id).subscribe(
      data =>{
        this.estCur = data;
      }, err =>{
        alert("Error al modificar estudio");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEstudio.update(id, this.estCur).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar estudio");
         this.router.navigate(['']);
      }
    )
  }
  goHome():void{this.router.navigate([''])}
}
