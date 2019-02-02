import { Component, OnInit } from '@angular/core';
import { DataApiService } from "src/app/services/data-api.service";
import {CarroInterface} from "../../models/carro-interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  private carros: CarroInterface;
  ngOnInit() {
  	this.getListCarros();
  }

  getListCarros(){
  	this.dataApi.getNotOfertas().subscribe((carros: CarroInterface) => this.carros = carros);
  }

  redirect(link: string){
    location.href = link
  }

}
