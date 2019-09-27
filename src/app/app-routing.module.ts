import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { AboutComponent } from 'src/app/components/about/about.component'; 
import { ContatoComponent } from 'src/app/components/contato/contato.component';
import { PropiedadeComponent } from './components/propiedade/propiedade.component';
import { ListaPropiedadesComponent } from './components/lista-propiedades/lista-propiedades.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'imoveis', component: ListaPropiedadesComponent},
  {path: 'imoveis/:nome_imovel', component: PropiedadeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
