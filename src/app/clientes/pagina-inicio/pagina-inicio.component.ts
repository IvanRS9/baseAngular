import { Component } from '@angular/core';
import { ICliente } from '../interfaces/clientes';
import { AgregarClienteComponent } from '../agregar-cliente/agregar-cliente.component';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrl: './pagina-inicio.component.css'
})
export class PaginaInicioComponent {
  // Inyectar el servicio
  constructor (private clientesService: ClientesService){

  }

  // agregarNuevoCliente(cliente: ICliente) {
  //   this.clientes.push(cliente);
  // }

  
}
