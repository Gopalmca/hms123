import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { NavbarComponent } from './HSM/navbar/navbar.component';
import { DashboardComponent } from './HSM/dashboard/dashboard.component';
import { AddpatientComponent } from './HSM/Patient/addpatient/addpatient.component';
import { PatientsComponent } from './HSM/Patient/patients/patients.component';
import { AddDoctorComponent } from './HSM/Doctor/add-doctor/add-doctor.component';
import { DoctorsComponent } from './HSM/Doctor/doctors/doctors.component';
import { AppointmentComponent } from './HSM/appointment/appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    AddpatientComponent,
    PatientsComponent,
    AddDoctorComponent,
    DoctorsComponent,
    AppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
