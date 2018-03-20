import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesVarianciaComponent } from './componentes-variancia.component';

describe('ComponentesVarianciaComponent', () => {
  let component: ComponentesVarianciaComponent;
  let fixture: ComponentFixture<ComponentesVarianciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentesVarianciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentesVarianciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
