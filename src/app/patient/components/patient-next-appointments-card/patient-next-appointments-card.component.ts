import { Component } from '@angular/core';
import {DataService} from "../../../shared/services/data-service/data-service.service";
import {Appointment} from "../../model/appointment";

@Component({
  selector: 'app-patient-next-appointments-card',
  templateUrl: './patient-next-appointments-card.component.html',
  styleUrls: ['./patient-next-appointments-card.component.css']
})
export class PatientNextAppointmentsCardComponent {
  constructor(private appointmentService: DataService<Appointment>) {
  }
  appointmentsPath = 'http://localhost:3000/appointments';
  appointments: any = [];

  ngOnInit() {
    this.appointmentService.getAll(this.appointmentsPath).subscribe(data => {
      this.appointments = data;
    });
  }
  deleteAppointment(id: number){
    this.appointmentService.delete(id,this.appointmentsPath)
      .subscribe(
        () => {
          console.log(`${id} deleted successfully`);
          this.appointmentService.getAll(this.appointmentsPath).subscribe(data => {
            this.appointments = data;
          });
        },
        (error) => {
          console.log(`Error deleting ${id}: ${error.message}`);
        }
      );
  }
}
