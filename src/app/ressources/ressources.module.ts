import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRessourcesComponent } from './add-ressources/add-ressources.component';
import { ListeRessourcesComponent } from './liste-ressources/liste-ressources.component';
import { FormsModule } from '@angular/forms';
import { UpdateRessourcesComponent } from './update-ressources/update-ressources.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddRessourcesComponent,
    ListeRessourcesComponent,
    UpdateRessourcesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    

  ]
})
export class RessourcesModule { }
