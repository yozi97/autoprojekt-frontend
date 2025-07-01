import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddCarComponent } from './components/add-car.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, AddCarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
