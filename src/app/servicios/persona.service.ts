import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
 
  //para localhost modificar enviromento.prod
  expURL = environment.URL + 'personas/';

  constructor(private httpClient:HttpClient) { }

  
  public list():Observable<persona[]>{
    return this.httpClient.get<persona[]>(`${this.expURL}lista`);
  }

  public detail(id:number): Observable<persona>{
    return this.httpClient.get<persona>(`${this.expURL}detail/${id}`)
  }
/*
  public save(persona: persona): Observable<any>{
    return this.httpClient.post<any>(`${this.expURL}create`, persona)
  }
*/
  public update(id:number, pers:persona):Observable<any>{
    return this.httpClient.put<any>(`${this.expURL}update/${id}`,pers)
  }
/*
  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(`${this.expURL}delete/${id}`)
  }

*/





/*
  public getPersona():Observable<persona>{
    return this.httpClient.get<persona>(this.expURL+"traer/perfil")
  }

  public update(id:number, pers:persona):Observable<any>{
    return this.httpClient.put<any>(`${this.expURL}editar/${id}`,pers)
  */
}

