import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Estudio } from '../model/estudio'; 

@Injectable({
  providedIn: 'root'
})
export class SEstudioService {

  //para localhost modificar enviromento.prod
  expURL = environment.URL + 'est/';

  constructor(private httpClient: HttpClient) { }

  public list():Observable<Estudio[]>{
    return this.httpClient.get<Estudio[]>(`${this.expURL}lista`);
  }

  public detail(id:number): Observable<Estudio>{
    return this.httpClient.get<Estudio>(`${this.expURL}detail/${id}`)
  }

  public save(Estudio: Estudio): Observable<any>{
    return this.httpClient.post<any>(`${this.expURL}create`, Estudio)
  }

  public update(id:number, Estudio:Estudio):Observable<any>{
    return this.httpClient.put<any>(`${this.expURL}update/${id}`,Estudio)
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(`${this.expURL}delete/${id}`)
  }
}
