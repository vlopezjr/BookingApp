import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { Booking } from './shared/booking';
import { BOOKINGS } from './shared/mock-bookings';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';


@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
    quotes: Booking[];
    bookings: Booking[];
    selectedBooking: Booking;

  constructor() { }

  ngOnInit() {
      this.quotes = BOOKINGS.filter(b => b.isFunded == false);
      this.bookings = BOOKINGS.filter(b => b.isFunded == true);
  }

  onSelect(booking:Booking):void {
    this.selectedBooking = booking;
  }
}
