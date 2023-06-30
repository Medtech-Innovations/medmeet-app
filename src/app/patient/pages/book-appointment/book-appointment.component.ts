import { Component } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { Appointment } from '../../../shared/model/appointment';
import { Payment } from '../../../shared/model/payment';
import {AppointmentsService} from "../../../shared/services/appointments.service";
import {DoctorsService} from "../../../shared/services/doctors.service";
import {UsersService} from "../../../shared/services/users.service";
import { PaymentService} from "../../../shared/services/payment.service";

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent {
  selectedDate: null | Date = null;
  selectedDoctor: any = null;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
    description: ['']
  });
  isLinear = false;

  doctors: any = [];
  users: any = [];
  appointmentData: Appointment;
  paymentData: Payment;

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  constructor(
    private _formBuilder: FormBuilder,
    private doctorService: DoctorsService,
    private usersService: UsersService,
    private appointmentService: AppointmentsService,
    private paymentService: PaymentService) {
      this.appointmentData = {} as Appointment;
      this.paymentData = {} as Payment;
    }


  ngOnInit() {
    this.doctorService.getAll().subscribe(data => {
      this.doctors = data;
    });
    this.usersService.getAll().subscribe(data => {
      this.users = data;
    });
  }

  updateAppointmentDoctor(doctor: any) {
    this.selectedDoctor = doctor;
    this.appointmentData.givenDoctorId = doctor.id;
  }

  createAppointment() {
    this.appointmentData.createdDate = new Date();
    this.appointmentData.appointmentDate = this.selectedDate;
    this.appointmentData.minutesDuration = 60;
    this.appointmentData.appointmentSessionUrl = 'https://medmeet.netlify.app/';
    this.appointmentData.appointmentPrescriptionUrl = 'https://medmeet.netlify.app/';
    this.appointmentData.paymentId = 1;
    this.appointmentData.userId = 1;
    this.appointmentData.status = true;
    this.appointmentService.create(this.appointmentData).
    subscribe((response: any) => {
      console.log('Appointment created successfully.');
    });
  }

  createPayment() {
    this.paymentData.createdDate = new Date();
    this.paymentData.amount = this.selectedDoctor.price;
    let descriptionControl = this.thirdFormGroup.get("description")?.value;
    this.paymentData.appointment = this.appointmentData;
    if (typeof descriptionControl !== 'undefined' && descriptionControl !== null) {
      this.paymentData.description = descriptionControl;
    } else {
      this.paymentData.description = 'No description';
    }
    this.paymentService.create(this.paymentData).subscribe((response: any) => {
      console.log('Payment created successfully.');
    });
  }


  getUser(userId: any) {
    return this.users.find((user: any) => user.id === userId);
  }
}
