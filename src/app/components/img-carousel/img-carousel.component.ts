import { Component, OnInit, Input } from '@angular/core';
import { ImoveisService } from 'src/app/services/imoveis.service';

@Component({
  selector: 'app-img-carousel',
  templateUrl: './img-carousel.component.html',
  styleUrls: ['./img-carousel.component.scss']
})
export class ImgCarouselComponent implements OnInit {

  @Input()
  imovel_name: string;
  imovelService: ImoveisService;
  location_photos: string[];

  constructor(_imoveisService: ImoveisService) { 
    this.imovelService = _imoveisService;
  }

  ngOnInit() {
    this.location_photos = this.imovelService.getImovel(this.imovel_name).photos;
  }

}
