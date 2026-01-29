import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DruzynaForm } from './druzyna-form.component';

describe('DruzynaForm', () => {
  let component: DruzynaForm;
  let fixture: ComponentFixture<DruzynaForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DruzynaForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DruzynaForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
