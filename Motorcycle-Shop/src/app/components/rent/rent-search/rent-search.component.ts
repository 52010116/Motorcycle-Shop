import { Component, OnInit } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { Motorcycle } from 'src/app/components/entities/motorcycle';
import { RentService } from '../rent.service';

@Component({
  selector: 'app-rent-search',
  templateUrl: './rent-search.component.html',
  styleUrls: ['./rent-search.component.css']
})
export class RentSearchComponent implements OnInit {

  brand = 'Yamaha';
  year = '2009';

  //array which saves found motorcycles
  motorcycles: Array<Motorcycle> = [];

  //selectedMotorcycle = selected motorcycle
  selectedMotorcycle: Motorcycle | null = null;

  //basket shows if the motorcycle is selected + id
  basket: { [key: number]: boolean } = {
  };

  //dependency injection to call httpClient
  constructor(private rentService: RentService) {
  }

  //search method calls findMotorcycles which get entries from db.json
  search(): void {
    this.rentService.findMotorcycle(this.brand, this.year).subscribe({
      next: (motorcycles) => {
        this.motorcycles = motorcycles
      }
    });

  }

  ngOnInit(): void {
  }

}


