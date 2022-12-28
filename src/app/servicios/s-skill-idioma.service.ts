import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SkillIdioma } from '../model/skill-idioma';

@Injectable({
  providedIn: 'root'
})
export class SSkillIdiomaService {
  expURL = 'http://localhost:8080/ski/'

  constructor(private httpClient: HttpClient) { }

  public list():Observable<SkillIdioma[]>{
    return this.httpClient.get<SkillIdioma[]>(`${this.expURL}lista`);
  }

  public detail(id:number): Observable<SkillIdioma>{
    return this.httpClient.get<SkillIdioma>(`${this.expURL}detail/${id}`)
  }

  public save(SkillIdioma: SkillIdioma): Observable<any>{
    return this.httpClient.post<any>(`${this.expURL}create`, SkillIdioma)
  }

  public update(id:number, SkillIdioma:SkillIdioma):Observable<any>{
    return this.httpClient.put<any>(`${this.expURL}update/${id}`,SkillIdioma)
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(`${this.expURL}delete/${id}`)
  }
}
