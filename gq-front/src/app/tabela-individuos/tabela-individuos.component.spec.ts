import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaIndividuosComponent } from './tabela-individuos.component';

describe('TabelaIndividuosComponent', () => {
  let component: TabelaIndividuosComponent;
  let fixture: ComponentFixture<TabelaIndividuosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaIndividuosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaIndividuosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
