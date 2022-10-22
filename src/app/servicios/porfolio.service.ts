import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PorfolioService {
 
  constructor(private http: HttpClient) {}

  obtenerDatos(): Observable<any> {
    return this.http.get('./assets/data/datos.json');
  }
 
 seVeBoton='1' ;

  clickEdit() {
    alert('es : '+this.seVeBoton);
    if ((this.seVeBoton == '0')) {
      this.seVeBoton = '1';
      alert('era 0 y es : '+this.seVeBoton);
      
           
    } else {
      this.seVeBoton = '0';
      alert('era 1 y es : '+this.seVeBoton);
      
    };
    alert('data final service: '+this.seVeBoton); 
    return this.seVeBoton; 
   
  }

}
/*
 clickEdit(): Observable<any> {
    
    if ((this.seVeBoton == '0')) {
      this.seVeBoton = '1';
      alert('era 0 y es : '+this.seVeBoton);
      
    } else {
      this.seVeBoton = '0';
      alert('era 1 y es : '+this.seVeBoton);
      
    };
    alert('data final service: '+this.seVeBoton); 
    return this.seVeBoton; 
   
  }
*/