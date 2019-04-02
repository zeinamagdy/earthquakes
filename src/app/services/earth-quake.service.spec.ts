import { TestBed } from '@angular/core/testing';

import { EarthQuakeService } from './earth-quake.service';

describe('EarthQuakeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EarthQuakeService = TestBed.get(EarthQuakeService);
    expect(service).toBeTruthy();
  });
});
