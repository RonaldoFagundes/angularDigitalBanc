import { Component, OnInit } from '@angular/core';
import { Movimentacao } from '../movimentacao.model';
import { MovimentacaoService } from '../movimentacao.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movimentacao-read',
  templateUrl: './movimentacao-read.component.html',
  styleUrls: ['./movimentacao-read.component.css']
})



export class MovimentacaoReadComponent implements OnInit {


  movimentacao: Movimentacao[] = []

  displayedColumns: string[] = ['id', 'tipo', 'descricao','valor', 'acoes']; 

  id_conta:String =""



  constructor(private service:MovimentacaoService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id_conta = this.route.snapshot.paramMap.get('id_conta')!;
    this.findAllMovimentacaoByConta();
  }




  findAllMovimentacaoByConta():void{
    this.service.findAllByConta(this.id_conta).subscribe((resposta)=>{
       this.movimentacao = resposta;
    })
  }



  /* findAllMovimentacao(){
     this.service.findAll().subscribe(resposta=>{
       this.movimentacao = resposta;
       console.log(resposta);
     })
  } */


}
