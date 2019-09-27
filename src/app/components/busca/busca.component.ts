import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit {

  search_form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.search_form = this.formBuilder.group({
      location: ['', Validators.required]
    });
  }

  procuraImoveis(location: string) {
    console.log(location);
  }
}
