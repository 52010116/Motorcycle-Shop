import { Component, OnInit, Output } from '@angular/core';
import { Motorcycle } from 'src/app/components/entities/motorcycle';
import { RentService } from '../rent.service';

@Component({
  selector: 'app-rent-search',
  templateUrl: './rent-search.component.html',
  styleUrls: ['./rent-search.component.css']
})
export class RentSearchComponent implements OnInit {

  id = 0;
  brand = 'Yamaha';
  year = 2009;
  searchResults: Array<Motorcycle> = [];

  //dependency injection to call httpClient
  constructor(private rentService: RentService) {
  }

  ngOnInit(): void {
  }

  search(id: number, year: number, brand: string) {
    this.rentService.searchMotorcycle(id, year, brand).subscribe(
      result => {
        this.searchResults = result;
      },
      error => {
        console.log(error);
      }
    );
  }


  delete(id: number) {
    this.rentService.deleteMotorcycle(id).subscribe(
    result => {
    //removes deleted motorcycle from the search results
    this.searchResults = this.searchResults.filter(motorcycle => motorcycle.id !== id);
      },
      error => {
        console.log(error);
      }
    );
  }



}


