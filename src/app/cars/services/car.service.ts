import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

export interface Car {
  id?: number;
  marka: string;
  model: string;
  godiste: number;
  cijena: number;
  opis?: string;
  slikaUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = 'http://localhost:8080/api/cars'; 

  constructor(private http: HttpClient) {}

  getCars() {
  return this.http.get<Car[]>('/api/cars');
}

addCar(car: Car): Observable<any> {
  return this.http.post(this.apiUrl, car);
}



  deleteCar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateCar(id: number, car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.apiUrl}/${id}`, car);
  }
}
