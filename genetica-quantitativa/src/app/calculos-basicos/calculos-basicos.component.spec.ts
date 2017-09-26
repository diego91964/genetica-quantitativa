import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculosBasicosComponent } from './calculos-basicos.component';

describe('CalculosBasicosComponent', () => {
  let component: CalculosBasicosComponent;
  let fixture: ComponentFixture<CalculosBasicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculosBasicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculosBasicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
