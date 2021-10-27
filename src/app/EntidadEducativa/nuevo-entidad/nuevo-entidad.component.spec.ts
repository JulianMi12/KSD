import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEntidadComponent } from './nuevo-entidad.component';

describe('NuevoEntidadComponent', () => {
  let component: NuevoEntidadComponent;
  let fixture: ComponentFixture<NuevoEntidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoEntidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoEntidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
