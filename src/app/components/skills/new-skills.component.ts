import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillBlanda } from 'src/app/model/skill-blanda';
import { SkillDura } from 'src/app/model/skill-dura';
import { SkillIdioma } from 'src/app/model/skill-idioma';
import { SSkillBlandaService } from 'src/app/servicios/s-skill-blanda.service';
import { SSkillDuraService } from 'src/app/servicios/s-skill-dura.service';
import { SSkillIdiomaService } from 'src/app/servicios/s-skill-idioma.service';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css'],
})
export class NewSkillsComponent implements OnInit {
  nombre: String = '';
  porcentaje: String = '';
  color: String = '';

  public ngDropdown = '1';
  public ngDropdownTipo = '0';

  constructor(
    private sSkillBlanda: SSkillBlandaService,
    private sSkillDura: SSkillDuraService,
    private sSkillIdioma: SSkillIdiomaService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onCreate(): void {

    if ((this.ngDropdownTipo == '1')) {
      const skb = new SkillBlanda(this.nombre, this.porcentaje, this.color);
      skb.color = this.ngDropdown;

      this.sSkillBlanda.save(skb).subscribe(
        (data) => {
          alert('Habilidad añadida');
          this.router.navigate(['']);
        },
        (err) => {
          alert('Falló');
          this.router.navigate(['']);
        }
      );
    }
    if ((this.ngDropdownTipo == '2')) {
      const skd = new SkillDura(this.nombre, this.porcentaje, this.color);
      skd.color = this.ngDropdown;

      this.sSkillDura.save(skd).subscribe(
        (data) => {
          alert('Habilidad añadida');
          this.router.navigate(['']);
        },
        (err) => {
          alert('Falló');
          this.router.navigate(['']);
        }
      );
    }
    if ((this.ngDropdownTipo == '3')) {
      const ski = new SkillIdioma(this.nombre, this.porcentaje, this.color);
      ski.color = this.ngDropdown;

      this.sSkillIdioma.save(ski).subscribe(
        (data) => {
          alert('Habilidad añadida');
          this.router.navigate(['']);
        },
        (err) => {
          alert('Falló');
          this.router.navigate(['']);
        }
      );
    }
  }
  goHome():void{this.router.navigate([''])}
}
