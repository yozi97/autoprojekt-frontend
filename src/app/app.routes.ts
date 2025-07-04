import { Routes } from '@angular/router';
import { AddCarComponent } from './cars/components/add-car/add-car.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'add-car', pathMatch: 'full' },
  { path: 'add-car', component: AddCarComponent },
  { path: 'login', component: LoginComponent }
];
