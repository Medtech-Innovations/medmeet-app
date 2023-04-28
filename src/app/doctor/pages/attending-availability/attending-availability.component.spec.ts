import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendingAvailabilityComponent } from './attending-availability.component';

describe('AttendingAvailabilityComponent', () => {
  let component: AttendingAvailabilityComponent;
  let fixture: ComponentFixture<AttendingAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendingAvailabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendingAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
