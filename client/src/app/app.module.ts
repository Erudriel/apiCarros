import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { HeroComponent } from './components/hero/hero.component';
import { DetalhesCarroComponent } from './components/detalhes-carro/detalhes-carro.component';
import { ListCarroComponent } from './components/admin/list-carro/list-carro.component';
import { LoginComponent } from './components/user/login/login.component';
import { CadastroComponent } from './components/user/cadastro/cadastro.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms"
//services
import { DataApiService } from "src/app/services/data-api.service";
import { ModalComponent } from './components/modal/modal.component';
import { TruncateTextPipe } from 'src/app/pipe/truncate-text.pipe';
//externals
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    OfertasComponent,
    HeroComponent,
    DetalhesCarroComponent,
    ListCarroComponent,
    LoginComponent,
    CadastroComponent,
    ProfileComponent,
    Page404Component,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    NgxPaginationModule
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
