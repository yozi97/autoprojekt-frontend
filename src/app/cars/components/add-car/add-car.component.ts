import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarService, Car } from '../../services/car.service';

@Component({
  selector: 'app-add-car',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {

  feedbackMessage: string = '';
  feedbackType: 'success' | 'error' = 'success';

  currentYear = new Date().getFullYear();  // <--- ovo dodaj

  car: Car = {
    marka: '',
    model: '',
    godiste: this.currentYear,  // možeš koristiti ovdje
    cijena: 0,
    opis: '',
    slikaUrl: ''
  };

  constructor(private carService: CarService) {}

  onSubmit() {
    this.carService.addCar(this.car).subscribe({
      next: (res) => {
        console.log('Auto dodan:', res);
        this.car = {
          marka: '',
          model: '',
          godiste: this.currentYear,
          cijena: 0,
          opis: '',
          slikaUrl: ''
        };
      },
      error: (err) => {
        console.error('Greška pri dodavanju auta:', err);
      }
    });
  }
}