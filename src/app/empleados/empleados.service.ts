import { Injectable } from '@angular/core';
import { IEmpleado } from './interfaces/empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  private _empleados: IEmpleado[] = [];

  get empleados(): IEmpleado[] {
    return this._empleados;
  }

  agregarEmpleado(empleado: IEmpleado) {
    this._empleados.push(empleado);

    // localStorage.setItem('empleados', JSON.stringify(this._empleados));
    console.log(this._empleados);
  }

  eliminarEmpleado(num: number) {
    this._empleados = this._empleados.filter(empleado => empleado.num !== num);

    this.actualizarLocalStorage();
  }

  private actualizarLocalStorage() {
    localStorage.setItem('empleados', JSON.stringify(this._empleados));
  }

  constructor() {
    this._empleados = JSON.parse(localStorage.getItem('empleados') ?? '[]');
  }
}
