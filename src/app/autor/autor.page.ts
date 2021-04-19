import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.page.html',
  styleUrls: ['./autor.page.scss'],
})

export class AutorPage implements OnInit {
  autor: {
    name: string,
    email: string,
    twitter: string,
    phone: string
};

  constructor() { 
    this.autor ={name:'francisco',email:'asdsad',twitter:'@thetter',phone:'99090900'};
  }

  ngOnInit() {
  }

}
