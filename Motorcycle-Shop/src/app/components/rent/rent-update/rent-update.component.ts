import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Motorcycle } from 'src/app/components/entities/motorcycle';
import { RentService } from '../rent.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-rent-update',
  templateUrl: './rent-update.component.html',
  styleUrls: ['./rent-update.component.css']
})
export class RentUpdateComponent implements OnInit {

  id!: number;
  motorcycle!: Motorcycle;
  editing = false;
  motorcycleForm!: FormGroup;
  noMotorcycleFound = false;
  successMessage = '';

  constructor(private rentService: RentService) { }

  ngOnInit() {
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

  searchMotorcycle() {
    this.rentService.getMotorcycleById(this.id).subscribe(
      (motorcycle) => {
        this.motorcycleForm.patchValue(motorcycle);
        this.motorcycle = this.motorcycleForm.value;
        this.editing = true;
        this.noMotorcycleFound = false; // set flag to false if motorcycle is found
      },
      (error) => {
        console.log(error);
        this.noMotorcycleFound = true; // set flag to true if motorcycle is not found
      }
    );
  }


  saveMotorcycle() {
    if (this.motorcycleForm.valid) {
      const updatedMotorcycle = this.motorcycleForm.value;
      if (this.motorcycle && this.motorcycle.id) {
        this.rentService.updateMotorcycle(this.motorcycle.id, updatedMotorcycle).subscribe(
          (motorcycle) => {
            console.log(`Updated motorcycle with id ${motorcycle.id}`);
            this.editing = false;
          },
          (error) => {
            console.log(error);
          }
        );
      }
    }
  }

  cancelEditing() {
    this.editing = false;
    this.motorcycle = {} as Motorcycle;
    this.noMotorcycleFound = false; // reset flag when editing is cancelled
  }

}
