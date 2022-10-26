import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../users/user.model';
import { UserService } from '../../users/user.service';

//import { Contas } from '../contas.model';
import { ContasService } from '../contas.service';



@Component({
  selector: 'app-conta-selected',
  templateUrl: './conta-selected.component.html',
  styleUrls: ['./conta-selected.component.css']
})


export class ContaSelectedComponent implements OnInit {



 // contas: Contas[] = [] 

// displayedColumns: string[] = [ 'id', 'numero', 'saldo', 'tipo' ,'movimentacao','acoes'];
// displayedColumns: string[] = [ 'id', 'numero', 'saldo', 'tipo' ,'movimentacao'];



 id_user:String = "" 

 id_conta:String =""


 contaId:String=""
 contaNumero:String ='' 
 contaTipo:String ='' 
 contaSaldo:String =''




 //add_conta:Boolean=true; 
 //new_conta:Boolean=true;





  user: User = {
    id: '',
    name: '',
    login: '',
    password:''    
  }






  
  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private contaservice : ContasService,

    private userservice: UserService, 
     ) { }




  ngOnInit(): void {
    this.id_user = this.route.snapshot.paramMap.get('id_user')! 
    this.id_conta = this.route.snapshot.paramMap.get('id_conta')! 
  //this.findAllContas();
  this.findUserById();
  this.findContaSelected();
  }





  findUserById(): void {
    this.userservice.findById(this.id_user!).subscribe((resposta) => {
    this.user.name = ` User :  ${resposta.name}`  ;   
  })
}  






/*
findAllContas(){
  this.contaservice.findAll().subscribe(resposta=> {
    this.contas= resposta;
    console.log(resposta)
  })
 }

*/

/*
findAllContas(){
   this.contaservice.findAllByUser(this.id_user).subscribe((resposta)=>{
    this.contas=resposta;
      if (this.contas.length === 0){
            this.new_conta = false;
            this.add_conta = true;
            console.log("não existe conta ")
      }else{
        this.new_conta = true;
        this.add_conta = false;
         console.log( " existe contas" )
      }
   })
}
*/




findContaSelected(){
 this.contaservice.findById(this.id_conta).subscribe(resposta=>{
   this.contaId = resposta.id!
   this.contaNumero = `Nº : ${resposta.numero}` 
   this.contaTipo   = ` Tipo : ${resposta.tipo}`  
   this.contaSaldo  = ` Saldo R$ ${resposta.saldo.toFixed(2)}`
   console.log(resposta)
 })
}






/*
 openCont():void{
  this.router.navigate([`contas/${this.id_user}/create`]);
 }
*/




 readMovimentacao(id_user:String , id_conta:String):void{
 this.router.navigate([`contas/${id_user}/${id_conta}/movimentacao`]);
//  this.user.id = id_user ;
 }




lancarMovimentacao(id_user:String , id_conta:String):void{
  this.router.navigate([`contas/${id_user}/${id_conta}/movimentacao/create`]);
//  this.user.id = id_user ;
} 


selecionarConta(){
  //this.router.navigate([`contas/${id_user}/${id_conta}/movimentacao/create`]);
 // this.router.navigate([`contas/${this.user.id}`]);
  this.router.navigate([`contas/${this.id_user}`]);
}



}
