import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { Booking } from './shared/booking';
import { BOOKINGS } from './shared/mock-bookings';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
    quotes: Booking[];
    bookings: Booking[];

  constructor() { }

  ngOnInit() {
      this.quotes = BOOKINGS.filter(b => b.isFunded == false);
      this.bookings = BOOKINGS.filter(b => b.isFunded == true);
  }

}
