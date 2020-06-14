import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPrimeiroComponente2Component } from './meu-primeiro-componente2.component';

describe('MeuPrimeiroComponente2Component', () => {
  let component: MeuPrimeiroComponente2Component;
  let fixture: ComponentFixture<MeuPrimeiroComponente2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuPrimeiroComponente2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuPrimeiroComponente2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
