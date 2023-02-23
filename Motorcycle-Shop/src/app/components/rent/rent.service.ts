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

  // injection of HTTPClient module
  constructor(private http: HttpClient) { }

  // SERVER
  // server install: npm install -g json-server
  // navigate to folder and then start server: json-server --watch db.json
   private apiUrl = 'http://localhost:3000/motorcycles';



  searchMotorcycle(id: number, year: number, brand: string): Observable<Motorcycle[]> {
    return this.http.get<Motorcycle[]>(`${this.apiUrl}?year=${year}&brand=${brand}`);
  }


  deleteMotorcycle(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { headers: httpOptions.headers });
  }


  createMotorcycle(motorcycle: Motorcycle): Observable<Motorcycle> {
    return this.http.post<Motorcycle>(this.apiUrl, motorcycle, httpOptions);
  }

  //editMotorcycle(id: number): Observable<>
}






