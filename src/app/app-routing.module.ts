import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//import { BookingsComponent } from '../bookings/bookings.component';
import { VenuesComponent } from './venues/venues.component';
import { PromotersComponent } from './promoters/promoters.component';

const appRoutes: Routes = [
 // { path: 'bookings', component: BookingsComponent },
  { path: 'venues', component: VenuesComponent },
  { path: 'promoters', component: PromotersComponent },
  { path: '',   redirectTo: '/bookings', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
