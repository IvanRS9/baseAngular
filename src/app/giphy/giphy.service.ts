import { Injectable } from '@angular/core';
import { Datos, GiphyData } from './interfaces/giphyData';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GiphyService {
  url: string = "https://api.giphy.com/v1/gifs/trending";
  apikey: string = "LMefR7zUdnTafw4yrtY2hBLXQWWWnxWL";
  limit: number = 3;
  results: Datos[] = [];

  constructor(private http: HttpClient) { }

  obtenerGifs(): Datos[]{
    this.http.get<GiphyData>(`${this.url}?api_key=${this.apikey}&limit=${this.limit}`).subscribe((response) => {
      this.results = response.data;
    });

    return this.results;
  }
}
