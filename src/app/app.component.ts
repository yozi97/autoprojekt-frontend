import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddCarComponent } from './cars/components/add-car/add-car.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, AddCarComponent, LoginComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
