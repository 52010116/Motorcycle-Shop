import { Routes } from '@angular/router';

import { RentSearchComponent } from './rent-search/rent-search.component';
import { RentCreateComponent } from './rent-create/rent-create.component';
import { RentUpdateComponent } from './rent-update/rent-update.component';
import { RentDeleteComponent } from './rent-delete/rent-delete.component';


export const RENT_ROUTES: Routes = [
  {
      path: "rent",
      component: RentSearchComponent
  },
  {
    path: "request",
    component: RentCreateComponent
  },
  {
    path: "delete",
    component: RentDeleteComponent
  },
  {
    path: "edit",
    component: RentUpdateComponent
  },
];
