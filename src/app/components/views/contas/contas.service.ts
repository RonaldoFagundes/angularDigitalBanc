import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Contas } from './contas.model';


@Injectable({
  providedIn: 'root'
})


export class ContasService {

  baseUrl:String = environment.baseUrl;


  constructor( private http: HttpClient  ) { }

  
  findAll():Observable<Contas[]>{
    const url = `${this.baseUrl}contas?users=1`  
    return this.http.get<Contas[]>(url);
  }


  
}
