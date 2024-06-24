import { Component, Input } from '@angular/core';
import { ICliente } from '../interfaces/clientes';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrl: './listado-clientes.component.css'
})

export class ListadoClientesComponent {
  // @Input()
  // clientes : ICliente[] = [];
  constructor(private clientesService: ClientesService) { }

  get clientes(): ICliente[] {
    return this.clientesService.clientes;
  }
}
