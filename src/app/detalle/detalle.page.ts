import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  peliculas: any;
  activatedRoute: any;
  getPelicula(id): any {
    return this.peliculas[id];
}
  constructor() { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
