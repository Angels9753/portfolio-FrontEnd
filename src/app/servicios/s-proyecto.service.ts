import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class SProyectoService {
  expURL = 'http://localhost:8080/pro/'

  constructor(private httpClient: HttpClient) { }

  public list():Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(`${this.expURL}lista`);
  }

  public detail(id:number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(`${this.expURL}detail/${id}`)
  }

  public save(Proyecto: Proyecto): Observable<any>{
    return this.httpClient.post<any>(`${this.expURL}create`, Proyecto)
  }

  public update(id:number, Proyecto:Proyecto):Observable<any>{
    return this.httpClient.put<any>(`${this.expURL}update/${id}`,Proyecto)
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(`${this.expURL}delete/${id}`)
  }
}

