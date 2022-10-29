import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})


export class UserCreateComponent implements OnInit {

  user: User = {
    id: '',
    name: '',
    login: '',
    password:''    
  }


  constructor(
    private service: UserService,   
    private router: Router
  ) { }

  
 

  ngOnInit(): void {
    // this.user.id = this.route.snapshot.paramMap.get('id')!
   // this.findById();
  }




 /*
  findById(): void {
    this.service.findById(this.user.id!).subscribe((resposta) => {
    this.user.name = resposta.name
    this.user.login = resposta.login
  })
} 
 */







 create():void{

  this.service.create(this.user).subscribe((resposta)=>{

    // this.router.navigate([`contas/${this.user.id}/create`]);  
     this.router.navigate(['login']);  
     this.service.mensagem("Usuario criado com sucesso!");

  }, err =>{
     for(let i = 0 ; i < err.error.errors.length; i++  ) {
         this.service.mensagem(err.error.errors[i].message)
     }
  })  



}


  


}
