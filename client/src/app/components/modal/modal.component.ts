import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../services/data-api.service';
import {NgForm} from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private dataApiService: DataApiService, private location: Location) { }


  ngOnInit() {
  }
  

  onSaveCarro(carroForm: NgForm): void{
    console.log('carrpI', carroForm.value.carroId)
  if(carroForm.value.carroId == undefined || carroForm.value.carroId == null){
    console.log('cadastro')
    this.dataApiService.saveCarro(carroForm.value).subscribe(carro => location.reload());
  }else{
    console.log('update')
    this.dataApiService.updateCarro(carroForm.value).subscribe(carro => location.reload());
  }
  }
}
