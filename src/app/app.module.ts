import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Componentes
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListaPlantillasComponent } from './components/plantillas/lista-plantillas/lista-plantillas.component';

import { IconsComponent } from './components/templates/icons/icons.component';
import { LogoComponent } from './components/templates/logo/logo.component';


//Servicios
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
// import { ImagenService } from './services/imagen.service';
import { SelLogoComponent } from './components/plantillas/sel-logo/sel-logo.component';
import { InfoComponent } from './components/plantillas/info/info.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SocialnetworkComponent } from './components/plantillas/socialnetwork/socialnetwork.component';
import { LinkSocialNetworkComponent } from './components/plantillas/link-social-network/link-social-network.component';
import { PagoComponent } from './components/plantillas/pago/pago.component';
import { PreviewComponent } from './components/plantillas/preview/preview.component';


import { TooltipModule } from 'ng2-tooltip-directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    IconsComponent,
    LogoComponent,
    ListaPlantillasComponent,
    
    SelLogoComponent,
    InfoComponent,
    SocialnetworkComponent,
    LinkSocialNetworkComponent,
    PagoComponent,
    PreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule, 
    TooltipModule,
    FormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
