import { Component } from '@angular/core';
import { ICliente } from '../interfaces/clientes';
import { AgregarClienteComponent } from '../agregar-cliente/agregar-cliente.component';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrl: './pagina-inicio.component.css'
})
export class PaginaInicioComponent {

  clientes : ICliente [] = [
    {
      nombre: 'PedroPedroPedro',
      credito: 100
    },{
      nombre: 'Diabloooo',
      credito: 200
    }
  ]

  agregarNuevoCliente(cliente: ICliente) {
    this.clientes.push(cliente);
  }
}
