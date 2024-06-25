import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEmpleadosComponent } from './header-empleados.component';

describe('HeaderEmpleadosComponent', () => {
  let component: HeaderEmpleadosComponent;
  let fixture: ComponentFixture<HeaderEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderEmpleadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
