import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCadastroRacasComponent } from './nav-cadastro-racas.component';

describe('NavCadastroRacasComponent', () => {
  let component: NavCadastroRacasComponent;
  let fixture: ComponentFixture<NavCadastroRacasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavCadastroRacasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCadastroRacasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
