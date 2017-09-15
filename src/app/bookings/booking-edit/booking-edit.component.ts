import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Booking } from '../shared/booking';
import { BOOKINGS } from '../shared/mock-bookings';

@Component({
  selector: 'booking-edit',
  templateUrl: './booking-edit.component.html',
  styleUrls: ['./booking-edit.component.css']
})
export class BookingEditComponent implements OnInit {
  booking: Booking;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.booking = BOOKINGS.filter(b => b.key == +id)[0];
  }
  
  goToBookings(){
    this.router.navigate(['/bookings']);
  }
}
