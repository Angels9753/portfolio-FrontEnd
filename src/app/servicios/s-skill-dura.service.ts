import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SkillDura } from '../model/skill-dura';

@Injectable({
  providedIn: 'root'
})
export class SSkillDuraService {
  expURL = 'http://localhost:8080/skd/'

  constructor(private httpClient: HttpClient) { }

  public list():Observable<SkillDura[]>{
    return this.httpClient.get<SkillDura[]>(this.expURL + 'lista');
  }

  public detail(id:number): Observable<SkillDura>{
    return this.httpClient.get<SkillDura>(this.expURL + 'detail/$(id)')
  }

  public save(SkillDura: SkillDura): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', SkillDura)
  }

  public update(id:number, SkillDura:SkillDura):Observable<any>{
    return this.httpClient.put<any>(this.expURL + 'update/${id}',SkillDura)
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.expURL + 'delete/${id}')
  }
}
