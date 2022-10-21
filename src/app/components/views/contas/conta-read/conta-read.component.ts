import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../users/user.model';
import { UserService } from '../../users/user.service';

import { Contas } from '../contas.model';
import { ContasService } from '../contas.service';


@Component({
  selector: 'app-conta-read',
  templateUrl: './conta-read.component.html',
  styleUrls: ['./conta-read.component.css']
})


export class ContaReadComponent implements OnInit {


 contas: Contas[] = [] 

 displayedColumns: string[] = [ 'id', 'numero', 'saldo', 'tipo' ,'movimentacao','acoes'];


  user: User = {
    id: '',
    name: '',
    login: '',
    password:''    
  }



  
  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private userservice: UserService, 
    private contaservice : ContasService ) { }



  ngOnInit(): void {
  this.user.id = this.route.snapshot.paramMap.get('id')!
  this.findUserById();
  this.findAllContas();
  }



  findUserById(): void {
    this.userservice.findById(this.user.id!).subscribe((resposta) => {
    this.user.name = resposta.name;   
  })
} 



findAllContas(){
  this.contaservice.findAll().subscribe(resposta=> {
    this.contas= resposta;
    console.log(resposta)
  })
 }




}
