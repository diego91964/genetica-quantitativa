import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculos-basicos',
  templateUrl: './calculos-basicos.component.html',
  styleUrls: ['./calculos-basicos.component.css']
})
export class CalculosBasicosComponent implements OnInit {

  //paiUm   = [];
  //paiDois = [];
  //fUm     = [];
  //fDois   = [];

  paiUmString: string = '';
  paiDoisString: string = '';
  fUmString: string = '';
  fDoisString: string = '';

  somaPaiUm;
  somapaiDois;
  somafUm;
  somafDois;

  mediaPaiUm;
  mediaPaiDois;
  mediaFUm;
  mediaFDois;

  constructor() { }

  ngOnInit() {
  }

  calcular (){

     let paiUm   = new Individuo(this.normalizaLista(this.paiUmString));
     let paiDois = new Individuo(this.normalizaLista(this.paiDoisString));
     let fUm     = new Individuo(this.normalizaLista(this.fUmString));
     let fDois   = new Individuo(this.normalizaLista(this.fDoisString));

     let variancaPaiUm =  paiUm.calculoVariancaFenotipica(3);
     let variancaPaiDois = paiDois.calculoVariancaFenotipica(3);
     let variancaFUm = fUm.calculoVariancaFenotipica(3);

     alert('Media: ' + paiUm.calculoMediaFenotipica(3));
     alert('Variança: ' + variancaPaiUm);

     let variancaAmbiental = this.calculoVariancaAmbiental(variancaPaiUm,variancaPaiDois,variancaFUm);
     let variancaGeneticaF2 = this.calculoVariancaGenetica(variancaPaiUm,variancaAmbiental);

     alert('Variança genética F2 ' + variancaGeneticaF2);
     //alert('Herdabilidade ' + this.calculoDaHerdabilidade());
  }

  calculoVariancaAmbiental (vPaiUm, vPaiDois, vFum) {
    return (vPaiUm + vPaiDois + 2*vFum) / 4;
  }

  calculoVariancaGenetica (vFdois, vAmbiental) {
    return (vFdois - vAmbiental);
  }

  calculoDaHerdabilidade (vGeneticaF2, vFenotipicaF2) {
    return (vGeneticaF2/vFenotipicaF2);
  }

  calculoNumeroDeGenes (mediaP1, mediaP2, variancaGeneticaF2){
    return Math.pow((mediaP1 - mediaP2), 2) / (8*variancaGeneticaF2);
  }

  calculoGanhoDeSelecao (herdabilidade, mediaF2, listaIndividuos: any[], percentualSelecao ){

    let individuosSelecionados = this.selecionaIndividuosDoVetor(listaIndividuos,percentualSelecao);
    let somaIndividuosSelecionados:number   = individuosSelecionados.reduce((prev,next)=>prev+(+next),0);
    let mediaIndividuosSelecionados:number   = somaIndividuosSelecionados / individuosSelecionados.length;


    return herdabilidade*(mediaF2 - mediaIndividuosSelecionados);
  }

  selecionaIndividuosDoVetor (individuos: any [] , porcentagemSelecionados: number ){
    let individuosSorted = individuos.sort();
    let tamanhoLista: number = individuosSorted.length;
    let indiceSelecionado: number = parseInt((tamanhoLista*(porcentagemSelecionados/100)) + '');
    return individuos.splice(indiceSelecionado,(tamanhoLista-indiceSelecionado));
  }

  normalizaLista (listaString:string){
    return listaString.trim().split(",");
  }

}

class Individuo {

    listaIndividuos: number[];
    mediaIndividuo: any;

    constructor(individuos: any[]) {
        this.listaIndividuos = individuos;
    }

    calculoMediaFenotipica(precision:number){

        precision =   precision == undefined ? 4 : precision;
        let somaIndividuo:number   = this.listaIndividuos.reduce((prev,next)=>prev+(+next),0);
        let mediaIndividuo:number   = somaIndividuo / this.listaIndividuos.length;
        return mediaIndividuo.toPrecision(precision);
    }

    calculoVariancaFenotipica (precision) {

      this.mediaIndividuo = this.mediaIndividuo == undefined ? this.calculoMediaFenotipica(precision) : this.mediaIndividuo;
      precision =   precision == undefined ? 4 : precision;
      let mediaIndividuo:any = this.calculoMediaFenotipica(precision);
      let varianca : number = this.listaIndividuos.reduce(
      (prev,current)=>(Math.pow((current-
        mediaIndividuo),2))/(this.listaIndividuos.length-1)+(+prev),0);

      return varianca;
    }


}
