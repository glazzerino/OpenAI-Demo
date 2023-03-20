import { TestBed } from '@angular/core/testing';

import { DavinciService } from './davinci.service';

describe('DavinciService', () => {
  let service: DavinciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DavinciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
