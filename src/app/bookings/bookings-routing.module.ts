import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BookingListComponent } from '../bookings/booking-list/booking-list.component';
import { BookingDetailComponent } from '../bookings/booking-detail/booking-detail.component';
import { BookingEditComponent } from '../bookings/booking-edit/booking-edit.component';
import { BookingAddComponent } from '../bookings/booking-add/booking-add.component';

const bookingsRoutes: Routes = [
  { path: 'bookings',  component: BookingListComponent },
  { path: 'booking/add', component: BookingAddComponent },
  { path: 'booking/:id', component: BookingDetailComponent },
  { path: 'booking/edit/:id', component: BookingEditComponent }  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(bookingsRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class BookingsRoutingModule { }
