import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCadastroServicoComponent } from './nav-cadastro-servico.component';

describe('NavCadastroServicoComponent', () => {
  let component: NavCadastroServicoComponent;
  let fixture: ComponentFixture<NavCadastroServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavCadastroServicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCadastroServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
