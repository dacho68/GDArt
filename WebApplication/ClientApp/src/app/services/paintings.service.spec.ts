import { TestBed } from '@angular/core/testing';

import { PaintingsService } from './paintings.service';

describe('PaintingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaintingsService = TestBed.get(PaintingsService);
    expect(service).toBeTruthy();
  });
});
