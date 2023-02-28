import { Component, OnInit } from '@angular/core';
import { Motorcycle } from 'src/app/components/entities/motorcycle';
import { RentService } from '../rent.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-rent-update',
  templateUrl: './rent-update.component.html',
  styleUrls: ['./rent-update.component.css']
})
export class RentUpdateComponent implements OnInit {

  // properties to store the motorcycle, its ID, editing flag, form, success message
  id!: number;
  motorcycle!: Motorcycle;
  editing = false;
  motorcycleForm!: FormGroup;
  // flag to check if a motorcycle is found
  noMotorcycleFound = false;
  successMessage = '';

  constructor(private rentService: RentService) { }

  ngOnInit() {
    // initializes form group with null values for all fields
    this.motorcycleForm = new FormGroup({
      id: new FormControl(null),
      year: new FormControl(null),
      brand: new FormControl(null),
      model: new FormControl(null),
      hp: new FormControl(null),
      ccm: new FormControl(null),
      kilometers: new FormControl(null)
    });
  }

  // searches motorcycle by ID using RentService and fills form with data
  searchMotorcycle() {
    this.rentService.getMotorcycleById(this.id).subscribe(
      (motorcycle) => {
        this.motorcycleForm.patchValue(motorcycle);
        this.motorcycle = this.motorcycleForm.value;
        this.editing = true;
        // sets flag to false if motorcycle is found
        this.noMotorcycleFound = false;
      },
      (error) => {
        console.log(error);
        // sets flag to true if motorcycle is not found
        this.noMotorcycleFound = true;
      }
    );
  }

  // saves updated rental data for motorcycle using RentService
  saveMotorcycle() {
    // checks if form is valid
    if (this.motorcycleForm.valid) {
      const updatedMotorcycle = this.motorcycleForm.value;
      // checks if  motorcycle exists and has ID
      if (this.motorcycle && this.motorcycle.id) {
        // updates motorcycle using RentService
        this.rentService.updateMotorcycle(this.motorcycle.id, updatedMotorcycle).subscribe(
          (motorcycle) => {
            console.log(`Updated motorcycle with id ${motorcycle.id}`);
            // sets editing flag to false
            this.editing = false;
            // updates motorcycle object with the returned value
            this.motorcycle = motorcycle;
            // displays  success message for 3 seconds
            this.successMessage = 'Edited successfully!';
            // clears success message after 3 seconds
            setTimeout(() => { this.successMessage = ''; }, 3000);
          },
          (error) => {
            console.log(error);
          }
        );
      }
    }
  }

  // cancels editing process for motorcycle
  cancelEditing() {
    this.editing = false;
    this.motorcycle = {} as Motorcycle;
    // resets flag when editing is cancelled
    this.noMotorcycleFound = false;
  }

}
