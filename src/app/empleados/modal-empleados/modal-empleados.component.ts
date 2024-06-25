import { Component } from '@angular/core';
import { IEmpleado } from '../interfaces/empleados';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-modal-empleados',
  templateUrl: './modal-empleados.component.html',
  styleUrl: './modal-empleados.component.css'
})
export class ModalEmpleadosComponent {
  add: IEmpleado = {
    num: 0,
    nombre: '',
    correo: '',
    telefono: '',
    fecha: new Date(),
    sexo: false
  }

  constructor(private empleadosService: EmpleadosService) { }

  agregar() {
    if (this.add.nombre === '' || this.add.correo === '' || this.add.telefono === '') {
      return;
    }

    this.empleadosService.agregarEmpleado(this.add);

    // Guarda los datos en localStorage
    localStorage.setItem('empleado', JSON.stringify(this.add));

    // Imprime el objeto completo en la consola
    console.log(this.add);

    // Resetea el formulario
    this.add = {
      num: 0,
      nombre: '',
      correo: '',
      telefono: '',
      fecha: new Date(),
      sexo: false
    };

    document.getElementById("btnModalClose")?.click();
  }
}
