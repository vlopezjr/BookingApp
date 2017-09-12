import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookingsComponent } from './bookings/bookings.component';
import { BookingDetailComponent } from './bookings/booking-detail/booking-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingsComponent,
    BookingDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
