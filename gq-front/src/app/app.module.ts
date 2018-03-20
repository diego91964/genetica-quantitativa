import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {TabelaIndividuosModule} from './tabela-individuos/tabela-individuos.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TabelaIndividuosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
