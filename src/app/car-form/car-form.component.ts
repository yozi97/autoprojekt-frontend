import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car-form',
  standalone: true,
  imports: [FormsModule],
  template: `
    <form (ngSubmit)="onSubmit()">
      <label>Marka:
        <input type="text" [(ngModel)]="brand" name="brand" required>
      </label><br>
      <label>Model:
        <input type="text" [(ngModel)]="model" name="model" required>
      </label><br>
      <label>Godina:
        <input type="number" [(ngModel)]="year" name="year" required>
      </label><br>
      <label>Cijena:
        <input type="number" [(ngModel)]="price" name="price" required>
      </label><br>
      <label>Opis:
        <textarea [(ngModel)]="description" name="description"></textarea>
      </label><br>
      <button type="submit">Dodaj Auto</button>
    </form>
  `
})
export class CarFormComponent {
  brand = '';
  model = '';
  year?: number;
  price?: number;
  description = '';

  onSubmit() {
    console.log('Podaci o autu:', {
      brand: this.brand,
      model: this.model,
      year: this.year,
      price: this.price,
      description: this.description
    });
    alert('Auto je dodat! (ovo je samo primer)');
  }
}
