import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { Booking } from './shared/booking';
import { BOOKINGS } from './shared/mock-bookings';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { BookingEditComponent } from './booking-edit/booking-edit.component';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {   
    bookings: Booking[];
    selectedBooking: Booking;
    bookingToEdit: Booking;

  constructor() { }

  ngOnInit() {     
      this.bookings = BOOKINGS;
  }

  viewBooking(booking:Booking):void {
    this.selectedBooking = booking;
    this.bookingToEdit = null;
  }

  editBooking(booking:Booking):void {
    this.bookingToEdit = booking;
    this.selectedBooking = null;
  }

  discardBooking(booking:Booking):void {
    BOOKINGS.splice(BOOKINGS.indexOf(booking), 1);
    this.bookings = BOOKINGS;
  }

  filterBookings(e): void {
    if(e.target.checked){
      this.bookings = BOOKINGS;
    }
    else{
      this.bookings = BOOKINGS.filter(b=>b.isFunded == false);
    }
  }
}
