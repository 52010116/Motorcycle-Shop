import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Motorcycle } from 'src/app/components/entities/motorcycle';
import { RentService } from '../rent.service';

@Component({
  selector: 'app-rent-create',
  templateUrl: './rent-create.component.html',
  styleUrls: ['./rent-create.component.css']
})
export class RentCreateComponent implements OnInit{
  // flag to show/hide success message
  showSuccessMessage = false;

  // flag to indicate whether the operation was successful or not
  success: boolean = false;

  // object to hold form data
  request: Motorcycle = {
    id: 100,
    brand: 'Yamaha',
    model: 'Tracer',
    year: 2023,
    hp: 75,
    ccm: 660,
    kilometers: 14987
  };

  // flag to indicate if the form was submitted
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

    // calls the createMotorcycle method of the RentService to create the new motorcycle entry
    this.rentService.createMotorcycle(data)
      .subscribe(() => {
        console.log('Motorcycle created successfully');

        // sets flags to show success message and indicate successful operation
        this.showSuccessMessage = true;
        this.success = true;
        this.submitted = true;

        // hides success message after 3 seconds
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 3000);
      });
  }

  // method to generate a new request with default values
  newRequest(): void {
    this.success = false;
    this.submitted = false;
    this.request = {
    id: 100,
    brand: 'Yamaha',
    model: 'MT',
    year: 2023,
    hp: 75,
    ccm: 700,
    kilometers: 0
    };
  }
}
