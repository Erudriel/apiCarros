import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { DataApiService } from "src/app/services/data-api.service";
import {CarroInterface} from "src/app/models/carro-interface";

@Component({
  selector: 'app-detalhes-carro',
  templateUrl: './detalhes-carro.component.html',
  styleUrls: ['./detalhes-carro.component.css']
})

export class DetalhesCarroComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route: ActivatedRoute, private router: Router) {}

  private carro: CarroInterface = {
  	modelo: "",
  	fabricante: "",
  	ano: 0, //tem que ser um número, na base está int
  	combustivel: "",
    preco: 0, //o valor é float
    oferta: true
  };

  ngOnInit() {
  	const carro_id = this.route.snapshot.params["id"];
  	this.getDetalhes(carro_id);
  }

  getDetalhes(id: string){
  	this.dataApi.getCarroById(id).subscribe(carro => (this.carro = carro));
  }

  redirect(link: string){
    location.href = link
  }
}
