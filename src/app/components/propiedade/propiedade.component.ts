import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Imovel } from 'src/app/models/Imovel'
import { ImoveisService } from 'src/app/services/imoveis.service';

@Component({
  selector: 'app-propiedade',
  templateUrl: './propiedade.component.html',
  styleUrls: ['./propiedade.component.scss']
})
export class PropiedadeComponent implements OnInit {

  private routeSub:any;
  imovel: Imovel;
  imovel_provider: ImoveisService;

  constructor(private route: ActivatedRoute, _imoveisService: ImoveisService) { 
    this.imovel_provider = _imoveisService;
  }

  ngOnInit() {
    
    let imovel_name;

    this.routeSub = this.route.params.subscribe(params => {
       imovel_name = params['nome_imovel'];
       console.log(imovel_name);
    });
  
    this.imovel = this.imovel_provider.getImovel(imovel_name);
  }

}
