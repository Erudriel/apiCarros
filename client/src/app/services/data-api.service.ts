import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { HttpClientModule } from "@angular/common/http/src/module";
import { AuthService } from "./auth.service";
import { map } from "rxjs/operators";
import { CarroInterface} from "../models/carro-interface";

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

	constructor(private http: HttpClient, private authService: AuthService){}

	carros:Observable<any>;
	carro:Observable<any>;

	public selectCarro: CarroInterface = {
		carroId: '',
		modelo:'',
		fabricante:'',
		cor:'',
		ano: 0,
		linkwebmotors: '',
		foto: '',
		combustivel: '',
		oferta: true,
		preco: 0,
	};
	
	headers : HttpHeaders = new HttpHeaders({
		"Content-Type": "application/json",
		Authorization: this.authService.getToken()
	});

	getAllCarros(){
	const url_api = "http://localhost:3000/api/carro";
	return this.http.get(url_api);
	}

	getNotOfertas(){
		const url_api = "http://localhost:3000/api/carro?filter[where][oferta]=0";
		return this.http.get(url_api);
		}

//http://localhost:3000/api/carro/2
getCarroById(id: string){
	const url_api = `http://localhost:3000/api/carro/${id}`;
	return(this.carro = this.http.get(url_api));

}

getOfertas(){
	const url_api = `http://localhost:3000/api/carro?filter[where][oferta]=1`;
	return (this.carros = this.http.get(url_api));
}

saveCarro(carro: CarroInterface){
	//todo: obter token de autenticação
	//todo: not null
	let token = this.authService.getToken();
	const url_api = `http://localhost:3000/api/carro?acces_token=${token}`;
	return (this.http.post<CarroInterface>(url_api, carro, {headers: this.headers}))
	.pipe(map(data => data));
}

updateCarro(carro: CarroInterface){
	//todo: obter token de autenticação
	//todo: not null
	const token = this.authService.getToken();
	const url_api = `http://localhost:3000/api/carro?access_token=${token}`;
	return (this.http.put<CarroInterface>(url_api, {
		modelo: carro.modelo,
		fabricante: carro.fabricante,
		ano: carro.ano,
		cor: carro.cor,
		combustivel: carro.combustivel,
		foto: carro.foto,
		linkwebmotors: carro.linkwebmotors,
		oferta: carro.oferta,
		preco: carro.preco,
		id: carro.carroId
	}))
	.pipe(map(data => data));
}

deleteCarro(id: string){
	//todo: obter token de autenticação
	//todo: not null
	let token = this.authService.getToken();
	console.log(id)
	const url_api = `http://localhost:3000/api/carro/${id}`;
	return (this.http.delete<CarroInterface>(url_api, {headers: this.headers}))
	.pipe(map(data => data));
}

}
