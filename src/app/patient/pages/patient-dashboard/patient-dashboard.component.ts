import { Component } from '@angular/core';
import { Appointment } from '../../model/appointment';
import { DataService } from 'src/app/shared/services/data-service/data-service.service';
import { interval, switchMap } from 'rxjs';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent {
  constructor(private appointmentService: DataService<Appointment>) {
  }
  appointmentsPath = 'http://localhost:3000/appointments';
  appointments: any = [];

  ngOnInit() {
      this.appointmentService.getAll(this.appointmentsPath).subscribe(data => {
      this.appointments = data;
    });
    interval(10000).pipe(
      switchMap(() => this.appointmentService.getAll(this.appointmentsPath))
    ).subscribe(data => {
      this.appointments = data;
    });
  }

  deleteAppointment(id: number){
    this.appointmentService.delete(id,this.appointmentsPath);
  }
}
