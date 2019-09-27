import { Component, OnInit, Input } from '@angular/core';
import { Imovel } from 'src/app/models/Imovel';

@Component({
  selector: 'app-item-lista-propiedades',
  templateUrl: './item-lista-propiedades.component.html',
  styleUrls: ['./item-lista-propiedades.component.scss']
})
export class ItemListaPropiedadesComponent implements OnInit {

  @Input()
  imovel: Imovel;

  constructor() { }

  ngOnInit() {
  }

}
