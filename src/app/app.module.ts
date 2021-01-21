import { MeuFormModule } from './meu-form/meu-form.module';
import { CursosModule } from './cursos/cursos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponente } from './meu-primeiro-componente/meu-primeiro-componente';
import { MeuPrimeiroComponente2Component } from './meu-primeiro-componente2/meu-primeiro-componente2.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloComponent } from './ciclo/ciclo.component';


@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponente,
    MeuPrimeiroComponente2Component,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent,

  ],
  imports: [
    BrowserModule,
    CursosModule,
    FormsModule,
    MeuFormModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
