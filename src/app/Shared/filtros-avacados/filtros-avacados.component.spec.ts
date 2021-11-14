import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosAvacadosComponent } from './filtros-avacados.component';

describe('FiltrosAvacadosComponent', () => {
  let component: FiltrosAvacadosComponent;
  let fixture: ComponentFixture<FiltrosAvacadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrosAvacadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrosAvacadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
