import { TestBed } from '@angular/core/testing';

import { Harcerz } from './harcerz';

describe('Harcerz', () => {
  let service: Harcerz;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Harcerz);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
