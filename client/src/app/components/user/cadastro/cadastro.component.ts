import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from 'src/app/models/user-interface';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private location: Location) { }
  private user: UserInterface = {
    username:"",
    email: "",
    password:""
  }
  public isError = false;
  public msgError = ''; 
  ngOnInit() {
  }

  onRegister(form:NgForm): void {
    if(form.valid){
      this.authService.registerUser(
        this.user.username, 
        this.user.email, 
        this.user.password).subscribe (user => {
          console.log(user)
         this.authService.loginUser(this.user.email, this.user.password)
         .subscribe(data => {
            this.authService.setToken(data.id)
            this.authService.setUser(user);
            this.router.navigate(['/user/profile']);
            location.reload();
         });
         res => {
           console.log(res.error);
           this.msgError = res.error.error.details.messages.email;
           
         }
        });
    }else{
      this.onIsError();
    }

  }


  onIsError(): void{
    this.isError = true;
    setTimeout(()=>{
      this.isError = false;
    }, 4000);
  }

}
