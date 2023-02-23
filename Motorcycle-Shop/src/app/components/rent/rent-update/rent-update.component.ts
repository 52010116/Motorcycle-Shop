import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Motorcycle } from 'src/app/components/entities/motorcycle';
import { RentService } from '../rent.service';

@Component({
  selector: 'app-rent-update',
  templateUrl: './rent-update.component.html',
  styleUrls: ['./rent-update.component.css']
})
export class RentUpdateComponent implements OnInit {


  constructor(
    private rentService: RentService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  editMotorcycleEntry(motorcycle: Motorcycle) {
    // navigate to the edit component and pass the id as a parameter
    this.router.navigate(['/edit', motorcycle.id]);
  }
}

