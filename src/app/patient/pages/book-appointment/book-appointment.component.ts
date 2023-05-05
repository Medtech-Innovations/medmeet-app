import { AfterViewInit, Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
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

  constructor(
    private _formBuilder: FormBuilder,
    private doctorService: DataService<any>,
    private appointmentService: DataService<Appointment>) {}

  ngOnInit() {
    this.doctorService.getAll(this.doctorsPath).subscribe(data => {
      this.doctors = data;
    });
  }



}
