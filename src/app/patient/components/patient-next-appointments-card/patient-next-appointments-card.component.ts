import { Component } from '@angular/core';
import {AppointmentsService} from "../../../shared/services/appointments.service";
import {DoctorsService} from "../../../shared/services/doctors.service";
import {UsersService} from "../../../shared/services/users.service";

@Component({
  selector: 'app-patient-next-appointments-card',
  templateUrl: './patient-next-appointments-card.component.html',
  styleUrls: ['./patient-next-appointments-card.component.css']
})
export class PatientNextAppointmentsCardComponent {
  constructor(
    private appointmentService: AppointmentsService,
    private doctorService: DoctorsService,
    private usersService: UsersService) {
  }

  appointments: any = [];
  users: any = [];
  doctors: any = [];

  ngOnInit() {
    this.appointmentService.getAll().subscribe(data => {
      this.appointments = data;
    });
    this.doctorService.getAll().subscribe(data => {
      this.doctors = data;
    });
    this.usersService.getAll().subscribe(data => {
      this.users = data;
    });
  }

  deleteAppointment(id: number){
    this.appointmentService.delete(id)
      .subscribe(
        () => {
          console.log(`${id} deleted successfully`);
          this.appointmentService.getAll().subscribe(data => {
            this.appointments = data;
          });
        },
        (error) => {
          console.log(`Error deleting ${id}: ${error.message}`);
        }
      );
  }

  joinAppointment(id: number){
    let updatedAppointment = this.appointments.find((appointment: any) => appointment.id === id);
    updatedAppointment.status = false;

    this.appointmentService.update(id, updatedAppointment).subscribe(() => {
        console.log(`${id} updated successfully`);
        this.appointmentService.getAll().subscribe(data => {
          this.appointments = data;
        });
      },
      (error) => {
        console.log(`Error deleting ${id}: ${error.message}`);
      }
    )
  }

  getUser(userId: any) {
    return this.users.find((user: any) => user.id === userId);
  }
  getDoctor(doctorId: any) {
    return this.doctors.find((doctor: any) => doctor.id === doctorId);
  }
}
