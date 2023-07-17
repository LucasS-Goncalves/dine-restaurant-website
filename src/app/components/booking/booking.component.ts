import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit{

  thisYear = new Date().getFullYear()

  ngOnInit(): void {
    console.log(this.thisYear)
  }
}
