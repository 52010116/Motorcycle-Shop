import { Routes } from '@angular/router';

import { RentSearchComponent } from './rent-search/rent-search.component';
import { RentCreateComponent } from './rent-create/rent-create.component';



export const RENT_ROUTES: Routes = [
  {
      path: "rent",
      component: RentSearchComponent
  },
  {
    path: "request",
    component: RentCreateComponent
  },
];
