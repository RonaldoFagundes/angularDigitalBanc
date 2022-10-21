import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Movimentacao } from './movimentacao.model';


@Injectable({
  providedIn: 'root'
})


export class MovimentacaoService {

  baseUrl:String = environment.baseUrl;



  constructor(private http: HttpClient) { }

  /* findAll():Observable<Movimentacao[]>{
    const url = `${this.baseUrl}movimentacao=1` 
    return this.http.get<Movimentacao[]>(url);
  } */

  

  findAllByConta(id_conta:String):Observable<Movimentacao[]>{
   // const url = `${this.baseUrl}movimentacao?contas=${id_conta}`
    const url = `${this.baseUrl}movimentacao?contas=${id_conta}`
    return this.http.get<Movimentacao[]>(url)
 }
}
