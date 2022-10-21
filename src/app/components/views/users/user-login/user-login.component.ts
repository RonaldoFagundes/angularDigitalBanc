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

   userNumero:String ="";
   userName:String ="";
   userPassword:String ="";


  constructor( 
    private service: UserService, 
    private route: ActivatedRoute, 
    private router: Router) { }


  ngOnInit(): void {
   // this.user.id = this.route.snapshot.paramMap.get('id')!
    //this.findById();
  }



   /*
    findById(): void {
      this.service.findById(this.user.id!).subscribe((resposta) => {
      this.user.name = resposta.name
      this.user.login = resposta.login
    })
  } 
  */






  logar():void {
         
   this.service.findById(this.user.id!).subscribe((resposta) => {
   this.user.login = resposta.login   
   this.user.password = resposta.password  
    
 if ( this.user.login === this.userName && this.user.password === this.userPassword ){
    //this.router.navigate(["contas"]); 
    this.router.navigate([`contas/${this.user.id}`]);
  }else{
    this.service.mensagem("login ou senha incorretos! ");    
  }
  
})
 

       
   



      


    }



 







  cadastrar():void {
    this.router.navigate(["create"]);
  }




}
