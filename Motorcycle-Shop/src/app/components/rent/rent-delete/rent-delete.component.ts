import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Motorcycle } from 'src/app/components/entities/motorcycle';
import { RentService } from '../rent.service';
import { RentSearchComponent } from '../rent-search/rent-search.component';

@Component({
  selector: 'app-rent-delete',
  templateUrl: './rent-delete.component.html',
  styleUrls: ['./rent-delete.component.css']
})
export class RentDeleteComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
