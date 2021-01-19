import { CursosModule } from './cursos/cursos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponente } from './meu-primeiro-componente/meu-primeiro-componente';
import { MeuPrimeiroComponente2Component } from './meu-primeiro-componente2/meu-primeiro-componente2.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponente,
    MeuPrimeiroComponente2Component
  ],
  imports: [
    BrowserModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
