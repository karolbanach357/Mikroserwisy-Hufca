import { TestBed } from '@angular/core/testing';

import { Druzyna } from './druzyna';

describe('Druzyna', () => {
  let service: Druzyna;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Druzyna);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
