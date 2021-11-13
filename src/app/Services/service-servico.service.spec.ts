import { TestBed } from '@angular/core/testing';

import { ServiceServicoService } from './service-servico.service';

describe('ServiceServicoService', () => {
  let service: ServiceServicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceServicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
