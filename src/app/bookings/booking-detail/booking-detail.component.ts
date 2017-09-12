import { Component, OnInit, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { Booking } from '../shared/booking';

@Component({
  selector: 'booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {
  @Input() booking: Booking;

  constructor() { }

  ngOnInit() {
  }

}
