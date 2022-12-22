import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ConocemeComponent } from './components/conoceme/conoceme.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { IconosEdicionComponent } from './components/iconos-edicion/iconos-edicion.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    ConocemeComponent,
    SkillsComponent,
    EstudiosComponent,
    ExperienciaComponent,
    ProyectosComponent,
    FooterComponent,
    LoginComponent,
    IconosEdicionComponent,
    HomeComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
