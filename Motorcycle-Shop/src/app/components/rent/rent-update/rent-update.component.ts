import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Motorcycle } from 'src/app/components/entities/motorcycle';
import { RentService } from '../rent.service';

@Component({
  selector: 'app-rent-update',
  templateUrl: './rent-update.component.html',
  styleUrls: ['./rent-update.component.css']
})
export class RentUpdateComponent {

  id!: number;
  motorcycle!: Motorcycle;
  editing: boolean = false;


  //dependency injection to call httpClient and ActivatedRoute
  constructor(private rentService: RentService) {}

  searchMotorcycle() {
    this.rentService.getMotorcycleById(this.id).subscribe(
      (motorcycle) => {
        this.motorcycle = motorcycle;
        this.editing = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  saveMotorcycle() {
    this.rentService.updateMotorcycle(this.motorcycle.id, this.motorcycle).subscribe(
      (motorcycle) => {
        console.log(`Updated motorcycle with id ${motorcycle.id}`);
        this.editing = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cancelEditing() {
    this.editing = false;
    this.motorcycle = {} as Motorcycle;
  }


}
