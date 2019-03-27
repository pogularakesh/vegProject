import { TestBed, inject } from '@angular/core/testing';

import { VegService } from './veg.service';

describe('VegService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VegService]
    });
  });

  it('should be created', inject([VegService], (service: VegService) => {
    expect(service).toBeTruthy();
  }));
});
