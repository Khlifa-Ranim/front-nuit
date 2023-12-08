import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { AppComponent } from './app.component';
import { ListeRessourcesComponent } from './ressources/liste-ressources/liste-ressources.component';
import { AddRessourcesComponent } from './ressources/add-ressources/add-ressources.component';
import { UpdateRessourcesComponent } from './ressources/update-ressources/update-ressources.component';
import { ClimateEnvComponent } from './climate-env/climate-env.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'listRessource', component: ListeRessourcesComponent },
  { path: 'AddRessource', component: AddRessourcesComponent },
  { path: 'editRessource/:id', component: UpdateRessourcesComponent },
  { path: 'climate', component: ClimateEnvComponent },



  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
