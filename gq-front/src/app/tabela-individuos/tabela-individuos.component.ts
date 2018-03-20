import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-individuos',
  templateUrl: './tabela-individuos.component.html',
  styleUrls: ['./tabela-individuos.component.css']
})
export class TabelaIndividuosComponent implements OnInit {

  settings:any = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    }
  };

  data = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv"
  },

  // ... list of items

  {
    id: 11,
    name: "Nicholas DuBuque",
    username: "Nicholas.Stanton",
    email: "Rey.Padberg@rosamond.biz"
  }
];
  constructor() { }

  ngOnInit() {
  }

}
