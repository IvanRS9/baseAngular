import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AcumuladorComponent } from './acumulador/acumulador.component';
import { ClientesModule } from './clientes/clientes.module';
import { CompartidoModule } from './compartido/compartido.module';
import { GiphyModule } from './giphy/giphy.module';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AcumuladorComponent, ClientesModule, CompartidoModule, GiphyModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = "Bases de Angular";
}
