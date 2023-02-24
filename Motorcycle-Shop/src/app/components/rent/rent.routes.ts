import { Routes } from '@angular/router';

import { RentSearchComponent } from './rent-search/rent-search.component';
import { RentCreateComponent } from './rent-create/rent-create.component';
import { RentUpdateComponent } from './rent-update/rent-update.component';



export const RENT_ROUTES: Routes = [
  {
      path: "rent",
      component: RentSearchComponent
  },
  {
    path: "new-entry",
    component: RentCreateComponent
  },
  {
    path: "edit",
    component: RentUpdateComponent
  },
];
