import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculos-basicos',
  templateUrl: './calculos-basicos.component.html',
  styleUrls: ['./calculos-basicos.component.css']
})
export class CalculosBasicosComponent implements OnInit {

  //paiUm   = [];
  paiDois = [];
  fUm     = [];
  fDois   = [];

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

     let paiUm = new Individuo(this.normalizaLista(this.paiUmString));

     alert('Media: ' + paiUm.calculoMediaFenotipica(3));
     alert('Variancca: ' + paiUm.calculoVariancaFenotipica(3));

  }

  calculoVariancaAmbiental () {
    
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
