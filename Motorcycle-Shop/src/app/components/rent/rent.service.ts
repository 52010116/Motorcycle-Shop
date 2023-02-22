import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Motorcycle } from 'src/app/components/entities/motorcycle';
import { AppModule } from 'src/app/app.module';

@Injectable({
  providedIn: 'root'
})
export class RentService  {

  // injection of HTTPClient module
  constructor(private http: HttpClient) { }

  // SERVER
  // server install: npm install -g json-server
  // navigate to folder and then start server: json-server --watch db.json
  url = 'http://localhost:3000/motorcycles';




  private apiUrl = 'http://localhost:3000/motorcycles';

  searchMotorcyclesByYearAndBrand(year: number, brand: string): Observable<Motorcycle[]> {
    return this.http.get<Motorcycle[]>(`${this.apiUrl}?year=${year}&brand=${brand}`);
  }

}






