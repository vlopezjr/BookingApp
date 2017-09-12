import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
      BrowserModule,
      FormsModule,
      NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
