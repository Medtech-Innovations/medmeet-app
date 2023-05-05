import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { DoctorsService } from '../../services/doctors/doctors.service';

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

  doctors: any = [];

  constructor(private _formBuilder: FormBuilder, private doctorService: DoctorsService ) {}

  ngOnInit() {
    this.doctorService.getAll().subscribe(doctors => {
      this.doctors = doctors;
    });
  }

}
