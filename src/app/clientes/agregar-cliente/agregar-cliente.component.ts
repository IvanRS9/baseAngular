import { Component, EventEmitter, Output } from '@angular/core';
import { ICliente } from '../interfaces/clientes';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrl: './agregar-cliente.component.css'
})
export class AgregarClienteComponent {
  nuevo: ICliente = {
    nombre: '',
    credito: 0
  }

  // @Output()
  // onNuevoCliente: EventEmitter<ICliente> = new EventEmitter();

  constructor(private clientesService: ClientesService) { }

  agregar() {
    // evento.preventDefault();
    if (this.nuevo.nombre.trim().length === 0)
      return;
    if (this.nuevo.credito === null)
      return;

    // this.onNuevoCliente.emit(this.nuevo)

    this.clientesService.agregarCliente(this.nuevo);

    this.nuevo = {
      nombre: '',
      credito: 0
    }
    
    console.log("Enviar");
  }
}
