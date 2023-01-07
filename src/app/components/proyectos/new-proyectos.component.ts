import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/servicios/s-proyecto.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit {

  institucionPr : String = '';
  subtituloPr : String = '';
  descripcionPr : String = '';
  webPr : String = '';
  urlLogoPr : String = '';

  constructor(private sProyecto: SProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

   onCreate(): void {
    const proy = new Proyecto(
      this.institucionPr,
      this.subtituloPr,
      this.descripcionPr,
      this.webPr,
      this.urlLogoPr);

      this.sProyecto.save(proy).subscribe(
        data => {
          alert("Proyecto añadida");
          this.router.navigate(['']);
        }, err => {
          alert("Falló");
          this.router.navigate(['']);
        }
      )
    }

    goHome():void{this.router.navigate([''])}
  }


