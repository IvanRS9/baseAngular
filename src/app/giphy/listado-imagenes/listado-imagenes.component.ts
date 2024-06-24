import { Component } from '@angular/core';
import { GiphyService } from '../giphy.service';
import { Datos } from '../interfaces/giphyData';

@Component({
  selector: 'app-listado-imagenes',
  templateUrl: './listado-imagenes.component.html',
  styleUrl: './listado-imagenes.component.css'
})
export class ListadoImagenesComponent {
  results: Datos[] = this.giphyService.obtenerGifs();

  constructor (private giphyService: GiphyService) { }

  obtenerGifs(){
    this.results = this.giphyService.obtenerGifs();
  }
}
