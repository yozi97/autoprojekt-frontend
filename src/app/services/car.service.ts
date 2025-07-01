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

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }

addCar(car: Car): Observable<any> {
  const formData = new FormData();
  formData.append('data', JSON.stringify(car));

  const token = localStorage.getItem('token');  // ili gdje god ti čuvaš token

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

  return this.http.post(this.apiUrl, formData, { headers });
}


  deleteCar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateCar(id: number, car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.apiUrl}/${id}`, car);
  }
}
