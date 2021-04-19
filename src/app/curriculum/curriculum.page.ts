import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.page.html',
  styleUrls: ['./curriculum.page.scss'],
})
export class CurriculumPage implements OnInit {
  listaTrabajos: {fecha: string, desc: string}[];
  constructor() { 
   this.listaTrabajos = [{fecha:'2012-2015',desc:'2012-2015'}]
  }

  ngOnInit() {
  }

}
