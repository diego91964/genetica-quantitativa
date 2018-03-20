import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ComponentesVarianciaService} from './../componentes-variancia.service';
@Component({
  selector: 'app-componentes-variancia',
  templateUrl: './componentes-variancia.component.html',
  styleUrls: ['./componentes-variancia.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ComponentesVarianciaComponent implements OnInit {

  componentesVarianciaService: ComponentesVarianciaService;
  valorTabela: string = 'Cole aqui sua tabela';
  tabela : any  = [];

  constructor(_componentesVarianciaService: ComponentesVarianciaService) {
    this.componentesVarianciaService = _componentesVarianciaService;
  }

  submeterTabela (){

    this.tabela = this.componentesVarianciaService.submitTabela('tabela','genes','sim','tab',3);
    alert('Submetido');
  }

  limparTabela (){
    this.valorTabela = 'Cole aqui sua tabela';
  }
  ngOnInit() {
  }

}
