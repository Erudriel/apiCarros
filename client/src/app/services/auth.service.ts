import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { UserInterface } from "../models/user-interface";
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  headers : HttpHeaders = new HttpHeaders({
  	"Content-Type": "application/json"
  });

  registerUser (username: string, email:string, password: string){
  	const url_api = `http://localhost:3000/api/Users`;
  	return this.http.post<UserInterface>(url_api, {
  		username: username, 
  		email: email, 
  		password: password},
  		{headers: this.headers}

  		).pipe(map(user => user));
  }

  loginUser(email: string,password: string): Observable<any>{
  	const url_api = `http://localhost:3000/api/Users/login`;
  	return this.http.post<UserInterface>(url_api, {email, password}, 
  		{headers: this.headers})
  		.pipe(map(data => data)
  		);
  }

  getUserById(id: number){
	let accessToken = localStorage.getItem("accessToken");
	const url_api = `http://localhost:3000/api/Users/${id}?access_token=${accessToken}`;
	return this.http.get(url_api);
  }


  setUser(user):void{
		console.log('antes')
	this.getUserById(user.userId || user.id).subscribe(data => {
		console.log('depois')
		let user_string = JSON.stringify(data)
		localStorage.setItem("currentUser", user_string);		
	})
  }

  setToken(token):void{
  	localStorage.setItem("accessToken", token);
  }

  getToken(){
  	return localStorage.getItem("accessToken");
  }

  getCurrentUser(): UserInterface{
  	try{
		let user_string = localStorage.getItem("currentUser");
		let user: UserInterface = JSON.parse(user_string);
		return user;
	}catch(err){
		return null;
	}
  }

  logoutUser(){
  	let accessToken = localStorage.getItem("accessToken");
  	const url_api = `http://localhost:3000/api/Users?logout?accessToken=${accessToken}`;
  	localStorage.removeItem("accessToken");
  	localStorage.removeItem("currentUser");
  	return this.http.post<UserInterface>(url_api, {headers: this.headers});
  }

}
