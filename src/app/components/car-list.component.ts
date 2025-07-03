import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarService, Car } from '../services/car.service';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];
  loading = false;
  error = '';

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.fetchCars();
  }

  fetchCars() {
    this.loading = true;
    this.error = '';
    this.carService.getCars().subscribe({
      next: (res) => {
        this.cars = res;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Greška pri učitavanju automobila.';
        console.error(err);
        this.loading = false;
      }
    });
  }
}
