import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponente } from './meu-primeiro-componente/meu-primeiro-componente';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponente
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
