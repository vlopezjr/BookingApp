import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

import { Booking } from '../shared/booking';
import { BOOKINGS } from '../shared/mock-bookings';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  bookings: Booking[];
  //selectedBooking: Booking;
  //bookingToEdit: Booking;

  constructor(private router: Router) { }

  ngOnInit() {     
      this.bookings = BOOKINGS;
  }

  viewBooking(booking:Booking):void {
    //this.selectedBooking = booking;
    //this.bookingToEdit = null;

    this.router.navigateByUrl("/booking/" + booking.key)
  }

  editBooking(booking:Booking):void {
    //this.bookingToEdit = booking;
    //this.selectedBooking = null;

    this.router.navigateByUrl("/booking/edit/" + booking.key)
  }

  addBooking() {
    this.router.navigateByUrl("/booking/add");
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
