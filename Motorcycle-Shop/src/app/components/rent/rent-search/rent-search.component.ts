import { Component, OnInit } from '@angular/core';
import { Motorcycle } from 'src/app/components/entities/motorcycle';
import { RentService } from '../rent.service';

@Component({
  selector: 'app-rent-search',
  templateUrl: './rent-search.component.html',
  styleUrls: ['./rent-search.component.css']
})
export class RentSearchComponent implements OnInit {

  brand = 'Yamaha';
  year = 2009;
  searchResults: Array<Motorcycle> = [];

  //array which saves found motorcycles
  motorcycles: Array<Motorcycle> = [];

  //selectedMotorcycle = selected motorcycle
  selectedMotorcycle: Motorcycle | null = null;



  //dependency injection to call httpClient
  constructor(private rentService: RentService) {
  }

  ngOnInit(): void {
  }

  search(year: number, brand: string) {
    this.rentService.searchMotorcyclesByYearAndBrand(year, brand).subscribe(
      result => {
        this.searchResults = result;
      },
      error => {
        console.log(error);
      }
    );
  }

}


