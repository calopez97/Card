import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardPrincipalComponent } from './components/card-principal/card-principal.component';
import { ListaPlantillasComponent } from './components/plantillas/lista-plantillas/lista-plantillas.component';
import {SelLogoComponent} from './components/plantillas/sel-logo/sel-logo.component';
import { InfoComponent } from './components/plantillas/info/info.component';
import {SocialnetworkComponent} from './components/plantillas/socialnetwork/socialnetwork.component'
import{LinkSocialNetworkComponent}from './components/plantillas/link-social-network/link-social-network.component' 
import {PagoComponent} from  './components/plantillas/pago/pago.component'



const routes: Routes = [
  { path: 'select-card', component: ListaPlantillasComponent, pathMatch: 'full' },
  { path: 'select-logo', component: SelLogoComponent },
  {path: 'info', component: InfoComponent },
  {path:'select-redes', component: SocialnetworkComponent},
  {path: 'link-network', component: LinkSocialNetworkComponent},
  {path:'pago', component: PagoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
