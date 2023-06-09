import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// Angular Material Design
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from "@angular/material/table";

// Components
import { LoginComponent } from './authentication/pages/login/login.component';
import { RegisterComponent } from './authentication/pages/register/register.component';
import { ForgotPasswordComponent } from './authentication/pages/forgot-password/forgot-password.component';
import { UserProfileComponent } from './authentication/pages/user-profile/user-profile.component';
import { GreetingContentComponent } from './shared/pages/greeting-content/greeting-content.component';
import { NavbarComponent } from './shared/pages/navbar/navbar.component';
import { BookAppointmentComponent } from './patient/pages/book-appointment/book-appointment.component';
import { AttendingAvailabilityComponent } from './doctor/pages/attending-availability/attending-availability.component';
import { NotificationsComponent } from './shared/pages/notifications/notifications.component';
import { PaymentProfileComponent } from './payment/pages/payment-profile/payment-profile.component';
import { CountrySelectorComponent } from './shared/pages/country-selector/country-selector.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageSwitcherComponent } from './shared/pages/language-switcher/language-switcher.component';
import { RecoverPasswordComponent } from './authentication/pages/recover-password/recover-password.component';
import { MainDashboardComponent } from './shared/pages/main-dashboard/main-dashboard.component';
import { HelpDeskComponent } from './help-desk/pages/help-desk/help-desk.component';
import { ChatComponent } from "./shared/pages/chat/chat.component";
import { PatientNextAppointmentsCardComponent } from './patient/components/patient-next-appointments-card/patient-next-appointments-card.component';
import { DoctorNextAppointmentsCardComponent } from './doctor/components/doctor-next-appointments-card/doctor-next-appointments-card.component';
import { AppointmentsHistoryComponent } from './patient/pages/appointments-history/appointments-history.component';
import { PaymentHistoryComponent } from './payment/pages/payment-history/payment-history.component';

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
    CountrySelectorComponent,
    LanguageSwitcherComponent,
    RecoverPasswordComponent,
    MainDashboardComponent,
    HelpDeskComponent,
    ChatComponent,
    PatientNextAppointmentsCardComponent,
    DoctorNextAppointmentsCardComponent,
    AppointmentsHistoryComponent,
    PaymentHistoryComponent
  ],
    imports: [
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatTabsModule,
        MatDatepickerModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatChipsModule,
        MatRadioModule,
        MatSelectModule,
        MatDividerModule,
        MatSnackBarModule,
        MatProgressBarModule,
        MatNativeDateModule,
        MatListModule,
        MatMenuModule,
        MatStepperModule,
        MatCardModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatTableModule
    ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
