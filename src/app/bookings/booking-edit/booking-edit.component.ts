import { Component, OnInit, Input } from '@angular/core';

import { Booking } from '../shared/booking';

@Component({
  selector: 'booking-edit',
  templateUrl: './booking-edit.component.html',
  styleUrls: ['./booking-edit.component.css']
})
export class BookingEditComponent implements OnInit {
  @Input() booking: Booking;

  constructor() { }

  ngOnInit() {
  }

}
