import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { BookingEditComponent } from './booking-edit/booking-edit.component';
import { BookingAddComponent } from './booking-add/booking-add.component';

import { BookingsRoutingModule } from './bookings-routing.module';
import { PhoneModule } from '../shared/phone.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BookingsRoutingModule,
    NgbModule,
    PhoneModule
  ],
  declarations: [
    BookingListComponent,
    BookingDetailComponent,
    BookingEditComponent,
    BookingAddComponent,    
  ]
})
export class BookingsModule { }
