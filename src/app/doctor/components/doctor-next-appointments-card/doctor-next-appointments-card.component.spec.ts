import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorNextAppointmentsCardComponent } from './doctor-next-appointments-card.component';

describe('DoctorNextAppointmentsCardComponent', () => {
  let component: DoctorNextAppointmentsCardComponent;
  let fixture: ComponentFixture<DoctorNextAppointmentsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorNextAppointmentsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorNextAppointmentsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
