import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarcerzDetailsComponent } from './harcerz-details.component';

describe('HarcerzDetails', () => {
  let component: HarcerzDetailsComponent;
  let fixture: ComponentFixture<HarcerzDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HarcerzDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HarcerzDetailsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
