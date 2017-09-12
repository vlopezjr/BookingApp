import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BookingsComponent } from './bookings/bookings.component';
import { BookingDetailComponent } from './bookings/booking-detail/booking-detail.component';
import { BookingAddComponent } from './bookings/booking-add/booking-add.component';
import { BookingEditComponent } from './bookings/booking-edit/booking-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingsComponent,
    BookingDetailComponent,
    BookingAddComponent,
    BookingEditComponent
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
