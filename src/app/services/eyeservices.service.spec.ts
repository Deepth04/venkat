import { TestBed } from '@angular/core/testing';

import { EyeservicesService } from './eyeservices.service';

describe('EyeservicesService', () => {
  let service: EyeservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EyeservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
