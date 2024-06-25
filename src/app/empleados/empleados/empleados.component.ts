import { Component } from '@angular/core';
import { IEmpleado } from '../interfaces/empleados';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {
  constructor(private empleadosService: EmpleadosService) { }

  get empleados(): IEmpleado[] {
    return this.empleadosService.empleados;
  }

  eliminarEmpleado(num: number): void {
    this.empleadosService.eliminarEmpleado(num);
  }

  trackByNum(index: number, empleado: IEmpleado): number {
    return empleado.num;
  }
}
