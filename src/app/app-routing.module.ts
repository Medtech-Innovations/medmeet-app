import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './authentication/pages/login/login.component';
import { RegisterComponent } from './authentication/pages/register/register.component';
import { BookAppointmentComponent } from './patient/pages/book-appointment/book-appointment.component';
import { ForgotPasswordComponent } from "./authentication/pages/forgot-password/forgot-password.component";
import { RecoverPasswordComponent } from "./authentication/pages/recover-password/recover-password.component";
import { MainDashboardComponent } from './shared/pages/main-dashboard/main-dashboard.component';
import { HelpDeskComponent } from "./help-desk/pages/help-desk/help-desk.component";
import { ChatComponent } from "./shared/pages/chat/chat.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'recover-password', component: RecoverPasswordComponent },
  { path: 'book', component: BookAppointmentComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'help-desk', component: HelpDeskComponent},
  { path: 'home', component: MainDashboardComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
