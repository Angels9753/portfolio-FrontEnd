import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SkillBlanda } from '../model/skill-blanda';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SSkillBlandaService {
  //para localhost modificar enviromento.prod
  expURL = environment.URL + 'skb/';

  constructor(private httpClient: HttpClient) { }

  public list():Observable<SkillBlanda[]>{
    return this.httpClient.get<SkillBlanda[]>(`${this.expURL}lista`);
  }

  public detail(id:number): Observable<SkillBlanda>{
    return this.httpClient.get<SkillBlanda>(`${this.expURL}detail/${id}`)
  }

  public save(SkillBlanda: SkillBlanda): Observable<any>{
    return this.httpClient.post<any>(`${this.expURL}create`, SkillBlanda)
  }

  public update(id:number, SkillBlanda:SkillBlanda):Observable<any>{
    return this.httpClient.put<any>(`${this.expURL}update/${id}`,SkillBlanda)
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(`${this.expURL}delete/${id}`)
  }
}
