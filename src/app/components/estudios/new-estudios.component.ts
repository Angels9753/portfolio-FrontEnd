import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from 'src/app/model/estudio';
import { SEstudioService } from 'src/app/servicios/s-estudio.service';

@Component({
  selector: 'app-new-estudios',
  templateUrl: './new-estudios.component.html',
  styleUrls: ['./new-estudios.component.css'],
})
export class NewEstudiosComponent implements OnInit {
  institucionEs: String = '';
  tituloEs: String = '';
  desdeHastaEs: String = '';
  urlLogoEs: String = '';

  constructor(private sEestudio: SEstudioService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const expe = new Estudio(
      this.institucionEs,
      this.tituloEs,
      this.desdeHastaEs,
      this.urlLogoEs
    );

    this.sEestudio.save(expe).subscribe(
      (data) => {
        alert('Estudio añadido');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Falló');
        this.router.navigate(['']);
      }
    );
  }
  goHome():void{this.router.navigate([''])}
}
