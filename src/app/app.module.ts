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
import { DiretivaNgifComponent } from './diretivas/diretiva-ngif/diretiva-ngif.component';
import { DiretivasNgswitchComponent } from './diretivas/diretivas-ngswitch/diretivas-ngswitch.component';
import { DiretivaNgforComponent } from './diretivas/diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgclassComponent } from './diretivas/diretiva-ngclass/diretiva-ngclass.component';
import { DiretivasNgstyleComponent } from './diretivas/diretivas-ngstyle/diretivas-ngstyle.component';
import { OperadorElvisComponent } from './diretivas/operador-elvis/operador-elvis.component';
import { DiretivaNgcontentComponent } from './diretivas/diretiva-ngcontent/diretiva-ngcontent.component';


@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponente,
    MeuPrimeiroComponente2Component,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent,
    DiretivaNgifComponent,
    DiretivasNgswitchComponent,
    DiretivaNgforComponent,
    DiretivaNgclassComponent,
    DiretivasNgstyleComponent,
    OperadorElvisComponent,
    DiretivaNgcontentComponent,

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
