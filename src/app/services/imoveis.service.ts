import { Injectable } from '@angular/core';

import { Imovel } from '../models/Imovel';
import { Location } from '../models/Location';

@Injectable({
  providedIn: 'root'
})
export class ImoveisService {

  lista_propiedades: Imovel[];

  constructor() { 

    let prologis_xy = new Location('Rio de Janeiro', 
                  'Baixada Fluminense', 'Av. Guandú, 1000 - Jardim Alvorada, Queimados');
  
    let desc = `Área de Terreno: 468.944,00 m²
    Área total construída: 162.022,00 m²
    Pé-direito: 12,0 m
    Resistência de piso: 5 ton/m²
    Docas (quantidade): 268
    Sistema de Sprinklers: Sim
    Iluminação natural: Sim
    Portaria Blindada: Sim
    Sistema de segurança / CFTV: Sim
    Espaçamento entre pilares (m): 22×22
    Vagas de estacionamento – veículos leves: 16
    Pátio de manobras: Sim`;  

    let prologis_queimados = new Imovel('Prologis Queimados',
                                     'Locação', 'Industrial', prologis_xy, desc);
    
    let enaax_xy = new Location('Rio de Janeiro', 'Baixada Fluminense', 'Rua Quitembu - Parque Industrial, Queimados');

    let enaax_desc = `Área de Terreno: 64.309,80 m²
    Área total construída: 27.225,90 m²
    Pé-direito: 12,00 m
    Resistência de piso: 5 ton/m²
    Docas (quantidade): 52
    Sistema de Sprinklers: Sim
    Iluminação natural: Sim
    Vagas de estacionamento – veículos leves: 26`

    let enaax_queimados = new Imovel('ENAAX Queimados', 'Locação', 'Industrial', enaax_xy, enaax_desc);
  
    let glp_xy = new Location('Rio de Janeiro', 'Baixada Fluminense', 'Rua Embaú, 2207 - Pavuna');

    let glp_desc = `Área de Terreno: 163.400,00 m²
    Área total construída: 76.017,56 m²
    Pé-direito: 11,5 – 13 m
    Resistência de piso: 7 ton/m²
    Docas (quantidade): 124
    Sistema de Sprinklers: Sim
    Iluminação natural: Sim
    Portaria Blindada: Sim
    Sistema de segurança / CFTV: Sim
    Espaçamento entre pilares (m): 26×26
    Vagas de estacionamento – veículos leves: 23
    Pátio de manobras: Sim`
  
    let glp_pavuna = new Imovel('GLP Pavuna', 'Locação', 'Industrial', glp_xy, glp_desc);

    // adição de mapas e afins

    prologis_queimados.thumb = "assets/img/thumbs/thumb_prologis-queimados.jpg";
    enaax_queimados.thumb = "assets/img/thumbs/thumb_enaax-queimados.jpg";
    glp_pavuna.thumb = "assets/img/thumbs/thumb_glp-pavuna.jpg";
  
    this.lista_propiedades = [prologis_queimados, enaax_queimados, glp_pavuna];
  }

  getImovel(nome: string): Imovel {

    let valor = null;

    for (const propiedade of this.lista_propiedades) {
      
      if (nome.trim() == propiedade.name.trim()) {
        valor = propiedade;
      }
    
      console.log("another loop")
    }
    
    return valor;
  }

  getImoveis(): Imovel[] {
    return this.lista_propiedades;
  }
}
