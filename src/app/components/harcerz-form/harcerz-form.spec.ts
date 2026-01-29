import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarcerzFormComponent } from './harcerz-form.component';

describe('HarcerzForm', () => {
  let component: HarcerzFormComponent;
  let fixture: ComponentFixture<HarcerzFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HarcerzFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HarcerzFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
