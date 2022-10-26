import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { ActivatedRoute , Router} from '@angular/router';



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})


export class UserLoginComponent implements OnInit {


 
  user: User = {
    id: '',
    name: '',
    login: '',
    password:''    
  }

  
   

  constructor( 
    private service: UserService, 
    private route: ActivatedRoute, 
    private router: Router) { }


  ngOnInit(): void {  
   // this.user.id = this.route.snapshot.paramMap.get('id_user')!;
  }



   
    logar(): void {
      this.service.findById(this.user.id!).subscribe((resposta) => {

    if ( this.user.login === resposta.login && this.user.password === resposta.password){
            this.router.navigate([`contas/${this.user.id}`]);
              console.log("credenciais ok  ")
           }else{
            this.service.mensagem("Dados de Validação incorretos! ");
            console.log(" error nas credenciais ")
           }
        
      
    })
  } 
 


 
  





  cadastrar():void {
    this.router.navigate(["create"]);
  }




}
