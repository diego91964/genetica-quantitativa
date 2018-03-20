import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { TabelaIndividuosComponent } from './tabela-individuos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2SmartTableModule,
  ],
  declarations: [TabelaIndividuosComponent],
  exports: [
    TabelaIndividuosComponent
  ]
})
export class TabelaIndividuosModule { }
