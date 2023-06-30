import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DoctorsService } from '../../../shared/services/doctors.service';
import { UsersService } from '../../../shared/services/users.service';
import { AppointmentsService } from '../../../shared/services/appointments.service';

@Component({
  selector: 'app-appointments-history',
  templateUrl: './appointments-history.component.html',
  styleUrls: ['./appointments-history.component.css']
})
export class AppointmentsHistoryComponent {
  constructor(
    private _formBuilder: FormBuilder,
    private doctorService: DoctorsService,
    private usersService: UsersService,
    private appointmentService: AppointmentsService
  ) {}

  displayedColumns: string[] = [
    'id',
    'appointmentDate',
    'appointmentTime',
    'minutesDuration',
    'doctorName',
    'specialty',
    'price',
    'appointmentPrescriptionUrl'
  ];
  dataSource: any;

  appointments: any = [];
  users: any = [];
  doctors: any = [];

  ngOnInit() {
    this.appointmentService.getAll().subscribe(data => {
      this.appointments = data;
      this.appointments = this.appointments.filter((appointment: any) => appointment.status === false);
      this.dataSource = this.appointments;
    });
    this.doctorService.getAll().subscribe(data => {
      this.doctors = data;
    });
    this.usersService.getAll().subscribe(data => {
      this.users = data;
    });
  }

  getUser(userId: any) {
    return this.users.find((user: any) => user.id === userId);
  }

  getDoctor(doctorId: any) {
    return this.doctors.find((doctor: any) => doctor.userId === doctorId);
  }
}
