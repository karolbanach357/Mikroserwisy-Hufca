import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DruzynaDetails } from './druzyna-details';

describe('DruzynaDetails', () => {
  let component: DruzynaDetails;
  let fixture: ComponentFixture<DruzynaDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DruzynaDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DruzynaDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
