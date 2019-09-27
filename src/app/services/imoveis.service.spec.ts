import { TestBed } from '@angular/core/testing';

import { ImoveisService } from './imoveis.service';

describe('ImoveisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImoveisService = TestBed.get(ImoveisService);
    expect(service).toBeTruthy();
  });
});
