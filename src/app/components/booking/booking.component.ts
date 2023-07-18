import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit{

  thisYear = new Date().getFullYear();
  @ViewChild('shifts_div') shifts_div!: ElementRef<HTMLDivElement>;

  ngOnInit(): void {
    console.log(this.thisYear)
  }

  openShiftsDiv(){
    this.shifts_div.nativeElement.classList.toggle('open');
  }
}
