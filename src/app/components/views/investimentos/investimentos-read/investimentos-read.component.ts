import { Component, OnInit } from '@angular/core';

import { Investimentos } from '../investimentos.model';
import { InvestimentosService } from '../investimentos.service';

@Component({
  selector: 'app-investimentos-read',
  templateUrl: './investimentos-read.component.html',
  styleUrls: ['./investimentos-read.component.css']
})

export class InvestimentosReadComponent implements OnInit {

  

  displayedColumns: string[] = ['id', 'nome', 'taxa', 'acoes']; 

  investimentos: Investimentos [] = []

  
  constructor(private service:InvestimentosService) { }




  ngOnInit(): void {
    this.findAll();
  }


  findAll(){
    this.service.findAll().subscribe(resposta=> {
      this.investimentos = resposta;
      console.log(resposta)
    })
   }


}
