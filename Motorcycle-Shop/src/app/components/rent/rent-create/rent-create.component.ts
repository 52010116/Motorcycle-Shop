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
  showSuccessMessage = false;
  success: boolean = false;

  request: Motorcycle = {
    id: 100,
    brand: 'Yamaha',
    model: 'Tracer',
    year: 2023,
    hp: 75,
    ccm: 660,
    kilometers: 14987
  };
  submitted = false;

  constructor(private rentService: RentService) { }

  ngOnInit(): void {
  }

  // variable data saves new motorcycle entry
  createMotorcycle(): void {
    const data = {
      id: this.request.id,
      brand: this.request.brand,
      model: this.request.model,
      year: this.request.year,
      hp: this.request.hp,
      ccm: this.request.ccm,
      kilometers: this.request.kilometers
    };


    this.rentService.createMotorcycle(data)
      .subscribe(() => {
        console.log('Motorcycle created successfully');
        this.showSuccessMessage = true;
        this.success = true;
        this.submitted = true;
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 3000);
      });
  }

  // generate a new request
  newRequest(): void {
    this.success = false;
    this.submitted = false;
    this.request = {
    id: 0,
    brand: 'Yamaha',
    model: 'MT',
    year: 2023,
    hp: 75,
    ccm: 700,
    kilometers: 0
    };
  }
}
