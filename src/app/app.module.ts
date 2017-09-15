import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BookingsModule } from './bookings/bookings.module';

//import { BookingListComponent } from './bookings/booking-list/booking-list.component';
//import { BookingDetailComponent } from './bookings/booking-detail/booking-detail.component';
//import { BookingAddComponent } from './bookings/booking-add/booking-add.component';
//import { BookingEditComponent } from './bookings/booking-edit/booking-edit.component';
import { VenuesComponent } from './venues/venues.component';
import { PromotersComponent } from './promoters/promoters.component';
import { PhoneModule } from './shared/phone.module';



@NgModule({
  declarations: [
    AppComponent,
    //BookingListComponent,
    //BookingDetailComponent,
    //BookingAddComponent,
    //BookingEditComponent,
    VenuesComponent,
    PromotersComponent
    
  ],
  imports: [
      BrowserModule,
      FormsModule, 
      BookingsModule,
      AppRoutingModule,     
      NgbModule.forRoot(),
      PhoneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
