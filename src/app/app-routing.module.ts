import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditConocemeComponent } from './components/conoceme/edit-conoceme.component';
import { EditEstudiosComponent } from './components/estudios/edit-estudios.component';
import { NewEstudiosComponent } from './components/estudios/new-estudios.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectosComponent } from './components/proyectos/edit-proyectos.component';
import { NewProyectosComponent } from './components/proyectos/new-proyectos.component';
import { NewSkillsComponent } from './components/skills/new-skills.component';


const routes: Routes = [
 {path:'', component:HomeComponent},
 {path:'login', component:LoginComponent},
 {path: 'nuevaexp', component: NewExperienciaComponent},
 {path: 'nuevoest', component: NewEstudiosComponent},
 {path: 'nuevopro', component: NewProyectosComponent},
 {path: 'nuevaskl', component: NewSkillsComponent},
 {path: 'editexp/:id', component:EditExperienciaComponent},
 {path: 'editpro/:id', component:EditProyectosComponent},
 {path: 'editest/:id', component:EditEstudiosComponent},
 {path: 'editper/:id', component:EditConocemeComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
