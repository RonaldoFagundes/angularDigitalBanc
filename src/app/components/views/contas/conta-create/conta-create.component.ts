import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContasService } from '../contas.service';
import { Contas} from '../contas.model';


@Component({
  selector: 'app-conta-create',
  templateUrl: './conta-create.component.html',
  styleUrls: ['./conta-create.component.css']
})


export class ContaCreateComponent implements OnInit {


  new_conta:number=0


  contas:Contas ={
    id:'',
    numero:'',
    saldo:0,
    tipo:''
  }

 


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contaservice : ContasService,
  ) { }


  ngOnInit(): void {
  }




   gerarConta():void{      

    const min = 1 ;
    const max = 999;
                  
    this.new_conta = Math.floor(Math.random()*(max - min))
      

    //this.router.navigate([`contas/${this.user.id}`]);
   }



}
