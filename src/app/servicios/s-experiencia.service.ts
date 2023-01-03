import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {

    //para localhost modificar enviromento.prod
    expURL = environment.URL + 'exp/';

  constructor(private httpClient: HttpClient) { }

  public list():Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(`${this.expURL}lista`);
  }

  public detail(id:number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(`${this.expURL}detail/${id}`)
  }

  public save(Experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(`${this.expURL}create`, Experiencia)
  }

  public update(id:number, Experiencia:Experiencia):Observable<any>{
    return this.httpClient.put<any>(`${this.expURL}update/${id}`,Experiencia)
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(`${this.expURL}delete/${id}`)
  }
}
