import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { CarroInterface } from '../../../models/carro-interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list-carro',
  templateUrl: './list-carro.component.html',
  styleUrls: ['./list-carro.component.css']
})
export class ListCarroComponent implements OnInit {

  constructor(private dataApiService: DataApiService) { }
  private carros: CarroInterface;
  pageActual: number = 1;
  
  ngOnInit() {
    this.getListCarros();
  }

  getListCarros(): void{
    this.dataApiService.getAllCarros()
    .subscribe((carros: CarroInterface) => (this.carros = carros));
  }

  onDeleteCarro(id: string): void{
    if(confirm("Tem certeza que deseja excluir?")){
    this.dataApiService.deleteCarro(id).subscribe();
    }
  }

  onPreUpdateCarro(carro: CarroInterface): void{
    this.dataApiService.selectCarro = Object.assign({}, carro);
  }
  
  resetForm(carroForm?: NgForm): void{
    this.dataApiService.selectCarro = {
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
    }
  }

}
