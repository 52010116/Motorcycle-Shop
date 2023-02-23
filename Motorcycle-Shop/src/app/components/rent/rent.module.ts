import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RENT_ROUTES } from './rent.routes';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { RentSearchComponent } from './rent-search/rent-search.component';
import { RentCreateComponent } from './rent-create/rent-create.component';



@NgModule({
  imports:[
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild(RENT_ROUTES),
  ],

  declarations: [
    RentSearchComponent,
    RentCreateComponent
  ],

  providers: [],

  exports: [
    RentSearchComponent,
    RentCreateComponent
  ]

})
export class RentModule { }
