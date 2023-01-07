import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  institucionEx : String = '';
  cargoEx : String = '';
  descripcionEx : String = '';
  desdeHastaEx : String = '';
  iconoEx : String = '';

  public ngDropdown = '1';

  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

   onCreate(): void {
    const expe = new Experiencia(
      this.institucionEx,
      this.cargoEx,
      this.descripcionEx,
      this.desdeHastaEx,
      this.iconoEx);

      
      expe.iconoEx=this.ngDropdown;

      this.sExperiencia.save(expe).subscribe(
        data => {
          alert("Experiencia añadida");
          this.router.navigate(['']);
        }, err => {
          alert("Falló");
          this.router.navigate(['']);
        }
      )
    }

    goHome():void{this.router.navigate([''])}
  }


