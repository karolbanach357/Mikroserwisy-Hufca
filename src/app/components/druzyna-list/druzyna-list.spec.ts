import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DruzynaListComponent } from './druzyna-list.component';

describe('DruzynaList', () => {
  let component: DruzynaListComponent;
  let fixture: ComponentFixture<DruzynaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DruzynaListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DruzynaListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
