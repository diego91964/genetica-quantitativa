import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHeaderModule } from './../../shared';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentesVarianciaComponent } from './componentes-variancia/componentes-variancia.component';



const routes: Routes = [
    {
        path: '',
        component: ComponentesVarianciaComponent
    }
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes),PageHeaderModule,FormsModule
  ],
  exports: [RouterModule],
  declarations: [ComponentesVarianciaComponent]
})
export class ComponentesVarianciaModule { }
