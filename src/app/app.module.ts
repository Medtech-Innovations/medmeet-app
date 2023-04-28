import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// Components
import { LoginComponent } from './authentication/pages/login/login.component';
import { RegisterComponent } from './authentication/pages/register/register.component';

// Angular Material Design
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ForgotPasswordComponent } from './authentication/pages/forgot-password/forgot-password.component';
import { UserProfileComponent } from './authentication/pages/user-profile/user-profile.component';
import { GreetingContentComponent } from './shared/pages/greeting-content/greeting-content.component';
import { NavbarComponent } from './shared/pages/navbar/navbar.component';
import { BookAppointmentComponent } from './patient/pages/book-appointment/book-appointment.component';
import { AttendingAvailabilityComponent } from './doctor/pages/attending-availability/attending-availability.component';
import { NotificationsComponent } from './shared/pages/notifications/notifications.component';
import { PaymentProfileComponent } from './payment/pages/payment-profile/payment-profile.component';
import { DashboardDoctorComponent } from './doctor/pages/dashboard-doctor/dashboard-doctor.component';
import { DashboardPatientComponent } from './patient/pages/dashboard-patient/dashboard-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    UserProfileComponent,
    GreetingContentComponent,
    NavbarComponent,
    BookAppointmentComponent,
    AttendingAvailabilityComponent,
    NotificationsComponent,
    PaymentProfileComponent,
    DashboardDoctorComponent,
    DashboardPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

