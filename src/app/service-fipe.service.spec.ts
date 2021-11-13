import { TestBed } from '@angular/core/testing';

import { ServiceFipeService } from './service-fipe.service';

describe('ServiceFipeService', () => {
  let service: ServiceFipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceFipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
