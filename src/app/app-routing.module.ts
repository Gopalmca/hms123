import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './HSM/dashboard/dashboard.component';
import { NavbarComponent } from './HSM/navbar/navbar.component';

const routes: Routes = [
  {path:'side',component:NavbarComponent},
  {path:'dash',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
