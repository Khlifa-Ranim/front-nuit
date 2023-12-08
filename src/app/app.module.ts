import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { RessourcesModule } from './ressources/ressources.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClimateEnvComponent } from './climate-env/climate-env.component';
import { AcceuilComponent } from './page/acceuil/acceuil.component';

@NgModule({
  declarations: [
    AppComponent,
    ClimateEnvComponent,
    AcceuilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    FormsModule,
    HttpClientModule,
    RessourcesModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, 
    MatDialogModule,
    MatButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
