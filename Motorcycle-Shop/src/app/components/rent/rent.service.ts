import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Motorcycle } from 'src/app/components/entities/motorcycle';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RentService  {

  // injection of HttpClient module
  constructor(private http: HttpClient) { }

  // server install: npm install -g json-server
  // navigate to folder and then start server: json-server --watch db.json
   private apiUrl = 'http://localhost:3000/motorcycles';


  // method to search for motorcycles based on id, year and brand
  searchMotorcycle(id: number, year: number, brand: string): Observable<Motorcycle[]> {
    return this.http.get<Motorcycle[]>(`${this.apiUrl}?year=${year}&brand=${brand}`);
  }

  // method to delete motorcycle by id
  deleteMotorcycle(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { headers: httpOptions.headers });
  }

  // method to create new motorcycle
  createMotorcycle(motorcycle: Motorcycle): Observable<Motorcycle> {
    return this.http.post<Motorcycle>(this.apiUrl, motorcycle, httpOptions);
  }

  // method to get motorcycle by id
  getMotorcycleById(id: number): Observable<Motorcycle> {
    return this.http.get<Motorcycle>(`${this.apiUrl}/${id}`);
  }

  // method to update motorcycle by id
  updateMotorcycle(id: number, motorcycle: Motorcycle): Observable<Motorcycle> {
    return this.http.put<Motorcycle>(`${this.apiUrl}/${id}`, motorcycle);
  }

}



