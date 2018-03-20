import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers,RequestOptions } from '@angular/http';

@Injectable()
export class ComponentesVarianciaService {

  private url: string = "http://jsonplaceholder.typicode.com/users";
  httpCliente: Http;

  constructor (public http: Http){
    this.httpCliente = http;
  }
  submitTabela(tabelaString,tipoTabela,rotulo,separador,precisao){

    let params = new URLSearchParams();
    params.set('tabela', tabelaString);

    let urltotal: string = "http://localhost:8080/componentesVariancia/submeteTabela/";

    urltotal = urltotal + precisao;
    urltotal = urltotal + "/" + tipoTabela;
    urltotal = urltotal + "/" + rotulo;
    urltotal = urltotal + "/" + separador;

    let username: string = 'user';
    let password: string = 'password';
    let headers: Headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(username + ":" + password));
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let options = new RequestOptions({ search: params , headers: headers });

    console.log(urltotal);

    let resposta = this.http.get(urltotal, options ).map(res => res.json());
    console.log(JSON.stringify(resposta));


    let tablea$ = [
        {'cultivar':'1' ,
         'blocos' : ['32.3','32.3','32.3'],
         'somaBlocos' : '96.9'
       },
       {'cultivar':'2' ,
        'blocos' : ['32.3','32.3','32.3'],
        'somaBlocos' : '96.9'
      },{'cultivar':'3' ,
       'blocos' : ['32.3','32.3','32.3'],
       'somaBlocos' : '96.9'
      }
    ];

    return tablea$;
    // let people$ = this.httpCliente
    // .get('http://swapi.co/api/people' , {headers:this.getHeaders()}).map(mapPersons);
    //
    // console.log(people$);
    //
    // return people$;
    // let teste$ = this.http.get(this.url)
    //   .map(res => res.json());
    //
    //   console.log(JSON.stringify(teste$));

  }

  private getUserUrl(id){
    return this.url + "/" + id;
  }


}
