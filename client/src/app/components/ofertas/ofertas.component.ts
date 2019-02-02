import { Component, OnInit } from '@angular/core';
import { DataApiService } from "src/app/services/data-api.service";
import { CarroInterface } from "src/app/models/carro-interface";

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  private carros : CarroInterface;

  ngOnInit() {
  	this.dataApi.getOfertas().subscribe((data: CarroInterface) => (this.carros = data));
  }
  redirect(link: string){
    location.href = link
  }

}
