import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderEmpleadosComponent } from './header-empleados/header-empleados.component';
import { ModalEmpleadosComponent } from './modal-empleados/modal-empleados.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { FormsModule } from '@angular/forms';
import { EmpleadosService } from './empleados.service';
import { AppComponent } from '../app.component';



@NgModule({
  declarations: [
    HeaderEmpleadosComponent,
    ModalEmpleadosComponent,
    EmpleadosComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    HeaderEmpleadosComponent,
    ModalEmpleadosComponent,
    EmpleadosComponent
  ],
  providers: [
    EmpleadosService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class EmpleadosModule { }
