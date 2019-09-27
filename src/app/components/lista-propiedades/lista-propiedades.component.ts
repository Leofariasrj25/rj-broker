import { Component, OnInit, Input } from '@angular/core';
import { Imovel } from 'src/app/models/Imovel';
import { ImoveisService } from 'src/app/services/imoveis.service';

@Component({
  selector: 'app-lista-propiedades',
  templateUrl: './lista-propiedades.component.html',
  styleUrls: ['./lista-propiedades.component.scss']
})
export class ListaPropiedadesComponent implements OnInit {

  lista_propiedades: Imovel[];
  imoveisService: ImoveisService;

  constructor(_imoveisService: ImoveisService) { 
    this.imoveisService = _imoveisService;
  }

  ngOnInit() {
    this.lista_propiedades = this.imoveisService.getImoveis();   
  }

}
