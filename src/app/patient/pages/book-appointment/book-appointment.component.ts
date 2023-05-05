import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { DataService } from 'src/app/shared/services/data-service/data-service.service';
import { Appointment } from '../../model/appointment';


@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent {
  selectedDate?:null;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  isLinear = false;


  doctorsPath = 'http://localhost:3000/doctors';
  doctors: any = [];

  appointmentsPath = 'http://localhost:3000/appointments';
  appointmentData: Appointment;

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  constructor(
    private _formBuilder: FormBuilder,
    private doctorService: DataService<any>,
    private appointmentService: DataService<Appointment>) {
      this.appointmentData = {} as Appointment;
    }

  ngOnInit() {
    this.doctorService.getAll(this.doctorsPath).subscribe(data => {
      this.doctors = data;
    });
    this.date.valueChanges.subscribe(value => {
      this.updateAppointmentDate(value);
    });
  }

  updateAppointmentDoctor(doctor: any) {
    this.appointmentData.doctor = doctor;
  }

  updateAppointmentDate(date: Date | null){
    this.appointmentData.date = date;
    console.log(date);
  }

  createAppointment() {
    this.appointmentService.create(this.appointmentData,this.appointmentsPath).
    subscribe((response: any) => {
      console.log('Appointment created successfully.');
    });
  }
}
