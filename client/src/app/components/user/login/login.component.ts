import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from 'src/app/models/user-interface';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { isError } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private location: Location) { }
  private user: UserInterface = {
    email: '',
    password: ''
  };
  public isError = false;

  ngOnInit() {}

  onLogin(form: NgForm){
    
    this.authService
      .loginUser (this.user.email, this.user.password)
      .subscribe( data => {
        console.log(data)
        const token = data.id;
        this.authService.setToken(token);
        this.authService.setUser(data);
        location.href = '/user/profile'
        //this.router.navigate(['/user/profile']);
        //location.reload();
        this.isError = false;
      },
      error => this.onIsError()
      );
}
  onIsError(): void{
    this.isError = true;
    setTimeout(()=>{
      this.isError = false;
    }, 4000);
  }

}

