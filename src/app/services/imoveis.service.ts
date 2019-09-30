import { Injectable } from '@angular/core';

import { Imovel } from '../models/Imovel';
import { Location } from '../models/Location';

@Injectable({
  providedIn: 'root'
})
export class ImoveisService {

  lista_propiedades: Imovel[];

  constructor() { 

    let canteiro_central_xy = new Location('Rio de Janeiro', 
                  'Baixada Fluminense', 'Av. Guandú, 1000 - Jardim Alvorada, Queimados');
  
    let canteiro_central_desc = `Essa área é a mais nobre no canteiro central do Distrito industrial com  RGI e Zoneamento Especial para bons negócios e resultados. 
    Quem entra e saí do Distrito passa na frente e quem passa também vê a área central.`;  

    let canteiro_central_queimados = new Imovel('D.I. Queimados',
                                     'Locação', 'Industrial', canteiro_central_xy, canteiro_central_desc);
    
    let canteiro_photos = ['terreno_entrada_queimados1.jpg', 
                          'terreno_entrada_queimados2.jpg', 
                          'terreno_entrada_queimados3.jpg',
                          'terreno_entrada_queimados4.jpg'];

    canteiro_central_queimados.photos = canteiro_photos;

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
  
    let enaax_photos = ['enaax_queimados1.jpg', 'enaax_queimados2.jpg'];

    enaax_queimados.photos = enaax_photos;

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

    let glp_photos = ['glp_pavuna1.jpg', 'glp_pavuna2.jpg'];
    glp_pavuna.photos = glp_photos;

    // adição de mapas e afins

    canteiro_central_queimados.thumb = "assets/img/thumbs/thumb_canteiro-di-queimados.jpg";
    enaax_queimados.thumb = "assets/img/thumbs/thumb_enaax-queimados.jpg";
    glp_pavuna.thumb = "assets/img/thumbs/thumb_glp-pavuna.jpg";

    let prologis_gmaps_url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.0329515043613!2d-43.63656538502412!3d-22.72701658510346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9959fff7650bf3%3A0xdadc306103bb417b!2sPrologis%20Queimados!5e0!3m2!1spt-BR!2sbr!4v1569628229433!5m2!1spt-BR!2sbr"
    let enaax_gmaps_url = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14719.220308665183!2d-43.6181432!3d-22.7354853!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb13a0732c1e58897!2sENAAX!5e0!3m2!1spt-BR!2sbr!4v1569633157682!5m2!1spt-BR!2sbr"
    let glppavuna_gmaps_url = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14710.6311845899!2d-43.3436894!3d-22.8151406!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x688ae9ae98849fe8!2sGLP%20Pavuna!5e0!3m2!1spt-BR!2sbr!4v1569633320358!5m2!1spt-BR!2sbr"

    canteiro_central_queimados.map_link = prologis_gmaps_url;
    enaax_queimados.map_link = enaax_gmaps_url;
    glp_pavuna.map_link = glppavuna_gmaps_url;
    
    this.lista_propiedades = [canteiro_central_queimados, enaax_queimados, glp_pavuna];
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
