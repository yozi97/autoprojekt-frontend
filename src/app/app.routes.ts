import { Routes } from '@angular/router';
import { AddCarComponent } from './components/add-car.component';
import { LoginComponent } from './login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'add-car', pathMatch: 'full' },
  { path: 'add-car', component: AddCarComponent },
  { path: 'login', component: LoginComponent }
];
