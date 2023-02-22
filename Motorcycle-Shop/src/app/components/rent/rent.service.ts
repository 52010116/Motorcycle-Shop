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


  findMotorcycle(brand: string, year: string): Observable<Motorcycle[]> {
    // definition data format
    const headers = new HttpHeaders()
        .set('Accept', 'application/json');
    //returns a list of found entries
    const params = new HttpParams()
        .set('brand', brand)
        .set('year', year);

    return this.http.get<Motorcycle[]>(this.url, {headers, params});
  }

}






