import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContatoComponent } from './components/contato/contato.component';
import { BuscaComponent } from './components/busca/busca.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PropiedadeComponent } from './components/propiedade/propiedade.component';
import { ListaPropiedadesComponent } from './components/lista-propiedades/lista-propiedades.component';
import { ItemListaPropiedadesComponent } from './components/item-lista-propiedades/item-lista-propiedades.component';
import { TestCaseComponent } from './components/test-case/test-case.component';
import { SafePipe } from './pipes/safe.pipe';
import { DescFormatterPipe } from './pipes/desc-formatter.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { ImgCarouselComponent } from './components/img-carousel/img-carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap';
import { ImoveisService } from './services/imoveis.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ContatoComponent,
    BuscaComponent,
    PropiedadeComponent,
    ListaPropiedadesComponent,
    ItemListaPropiedadesComponent,
    TestCaseComponent,
    SafePipe,
    DescFormatterPipe,
    FooterComponent,
    ImgCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot()
  ],
  providers: [ImoveisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
