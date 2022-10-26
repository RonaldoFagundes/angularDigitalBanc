import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movimentacao } from '../movimentacao.model';
import { MovimentacaoService } from '../movimentacao.service';
import { ContasService } from '../../contas/contas.service';
import { Contas } from '../../contas/contas.model';


//import { User } from '../../users/user.model';



@Component({
  selector: 'app-movimentacao-create',
  templateUrl: './movimentacao-create.component.html',
  styleUrls: ['./movimentacao-create.component.css']
})


export class MovimentacaoCreateComponent implements OnInit {



 //  id_conta:String=''


id_user:String=""

/*
user: User = {
  id: '',
  name: '',
  login: '',
  password:''    
}
*/
   
    
      // receitas:boolean =false
     //  despesas:boolean =false

       receitas =null
       despesas=null
  
       tipoMovimentacao:String =""   

   movimentacao:Movimentacao={
    id:'',
    tipo:'',
    descricao:'',
    valor:0
   }




   contas:Contas ={
    id:'',
    numero:'',
    saldo:0,
    tipo:''
  }
    


  

  valorTransacao:number=0

  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movimentacaoService: MovimentacaoService ,
    private contaService:ContasService,
    
  ) { }







  ngOnInit(): void {
     this.id_user = this.route.snapshot.paramMap.get('id_user')!;
     this.contas.id = this.route.snapshot.paramMap.get('id_conta')!;
     this.getContaSaldo();

     
  }




 





  getContaSaldo():void{
    this.contaService.findById(this.contas.id!).subscribe((resposta )=>{
     this.contas.numero = resposta.numero;
      this.contas.tipo  = resposta.tipo;
       this.contas.saldo = resposta.saldo;       
        console.log(resposta)
    })
  }







  lancarMovimentacao():void{   

    this.movimentacaoService.create(this.movimentacao , this.contas.id! ).subscribe((resposta) =>{

      this.router.navigate([`contas/${this.id_user}/${this.contas.id}/movimentacao`]);
      this.movimentacaoService.mensagem('Movimentação lançada com sucesso! ');
      this.updateSaldoConta();
      
    },err=>{
       this.movimentacaoService.mensagem("erro ao lançar movimentação")
    } )
  }






  telaConta():void{
    this.router.navigate([`contas/${this.id_user}/${this.contas.id}/selected`]);
  }









   
  updateSaldoConta():void{    
    //this.contas.saldo = 223
   // this.contas.saldo = this.contas.saldo  - this.movimentacao.valor
        
   //this.contas.saldo += + this.movimentacao.valor

        if(this.tipoMovimentacao === "Receitas"){
          this.contas.saldo += + this.movimentacao.valor
         }
        if( this.tipoMovimentacao === "Despesas"){
          this.contas.saldo = this.contas.saldo  - this.movimentacao.valor
         }

        this.contaService.update(this.contas).subscribe((resposta)=>{  
       })

  }
   
  
  




  selecionarTipo(receitas:boolean, despesas:boolean):void{
    
    if (receitas === true && despesas === false ){
        this.tipoMovimentacao = "Receitas"   
     }

     if ( receitas === false && despesas === true){
        this.tipoMovimentacao = "Despesas"      
     }
     
  }
    
  







  }











 /*
 updateSaldo():void{
  
 // this.contas.numero = '4488' ;
 // this.contas.tipo = 'Conta Corrente'
  this.novoSaldo = this.contas.saldo - this.valorTransacao
  this.contas.saldo = this.novoSaldo

    //  this.contas.tipo = 'Conta Corrente'
    this.contaService.update(this.contas).subscribe((resposta)=>{     

   // this.router.navigate([`contas/${this.id_user}`]);

    this.router.navigate([`contas/${this.id_user}/${this.contas.id}/selected`]);

   // this.router.navigate([`contas/${this.contas.id}/selected`]);

    this.movimentacaoService.mensagem(` conta ${this.contas.id}, atualizada com sucesso! `)

    },err=>{
      this.movimentacaoService.mensagem(` erro ao atualizar conta ${this.contas.id} `)
    })

 }
 




 setarNovoSaldo():void{
  this.novoSaldo = this.contas.saldo - this.movimentacao.valor
  console.log(this.novoSaldo)
 }

   




 // this.novoSaldo = this.contas.saldo - this.valorTransacao
   // this.contas.saldo = this.novoSaldo
    
   // console.log(this.id_user +" "+this.contas.id)
    
    // this.contas.numero = '4488' ;
    //  this.contas.tipo = 'Conta Corrente'
    //   this.updateSaldoConta();
    //  console.log(this.user.id)

 */