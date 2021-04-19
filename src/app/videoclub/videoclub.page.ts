import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-videoclub',
  templateUrl: './videoclub.page.html',
  styleUrls: ['./videoclub.page.scss'],
})
export class VideoclubPage implements OnInit {
  private peliculas: {
    title: string,
    year: string,
    director: string,
    poster: string,
    synopsis: string} [];
  router: any;
    verPaginaDetalle(id): void {
      this.router.navigate(['/detalle', id]);
  }
  constructor() { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    console.log('ionViewDidEnter VideoclubPage');
  }
  
   
}

