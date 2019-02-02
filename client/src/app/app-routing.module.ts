import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { OfertasComponent } from "./components/ofertas/ofertas.component";
import { DetalhesCarroComponent } from "./components/detalhes-carro/detalhes-carro.component";
import { ListCarroComponent } from "./components/admin/list-carro/list-carro.component";
import { LoginComponent } from "./components/user/login/login.component";
import { CadastroComponent } from "./components/user/cadastro/cadastro.component";
import { ProfileComponent } from "./components/user/profile/profile.component";
import { Page404Component } from "./components/page404/page404.component";
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
	{path: '',
        redirectTo: '/home',
        pathMatch: 'full'},
    {path: "home", component: HomeComponent},
	{path: "ofertas", component:OfertasComponent, canActivate: [AuthGuard]}, //apenasusuários autenticados
	{path: "carro/:id", component: DetalhesCarroComponent},
	{path: "admin/list-carro", component: ListCarroComponent, canActivate: [AuthGuard]},
	{path: "user/login", component: LoginComponent},
	{path: "user/cadastro", component: CadastroComponent}, //deve estar logado
	{path: "user/profile", component:ProfileComponent, canActivate: [AuthGuard]},
	{path: "**", component: Page404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
