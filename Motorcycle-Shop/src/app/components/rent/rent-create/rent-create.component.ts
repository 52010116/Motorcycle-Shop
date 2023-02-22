import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Motorcycle } from 'src/app/components/entities/motorcycle';
import { RentService } from '../rent.service';

@Component({
  selector: 'app-rent-create',
  templateUrl: './rent-create.component.html',
  styleUrls: ['./rent-create.component.css']
})
export class RentCreateComponent implements OnInit{
  motorcycle: Motorcycle = {
    id: 100,
    brand: 'Yamaha',
    model: 'Tracer',
    year: 2023,
    hp: 75,
    ccm: 660,
    kilometers: 14987
  };

  constructor(private rentService: RentService) { }

  ngOnInit(): void {
  }

  // in der var "data" wird der Post gespeichert
  createMotorcycle(): void {
    const data = {
      id: this.motorcycle.id,
      brand: this.motorcycle.brand,
      model: this.motorcycle.model,
      year: this.motorcycle.year,
      hp: this.motorcycle.hp,
      ccm: this.motorcycle.ccm,
      kilometers: this.motorcycle.kilometers
    };


    this.rentService.createMotorcycle(data)
      .subscribe(() => {
        console.log('Motorcycle created successfully');
      });
  }
}
