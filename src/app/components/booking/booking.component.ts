import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit{

  reservationForm!: FormGroup;
  thisYear = new Date().getFullYear();
  shiftPicked!: string;
  people = 1;
  @ViewChild('shifts_div') shifts_div!: ElementRef<HTMLDivElement>;
  @ViewChild('shiftsOptions') shiftsOptions!: ElementRef<HTMLUListElement>;

  ngOnInit(): void {

    this.reservationForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'date': new FormGroup({
        'month': new FormControl(null, [Validators.required]),
        'day': new FormControl(null, [Validators.required]),
        'year': new FormControl(null, [Validators.required])
      }),
      'time': new FormGroup({
        'hour': new FormControl(null, [Validators.required]),
        'minute': new FormControl(null, [Validators.required]),
        'shift': new FormControl('AM', [Validators.required]),
      })
    })
  }

  openShiftsDiv(){
    this.shifts_div.nativeElement.classList.toggle('open');
  }

  switchShifts(event: Event){
    const li = event.target as HTMLLIElement;
    let liSpan = li.firstChild as HTMLSpanElement;
    const shiftChosen = li.textContent as string;
    this.shiftPicked = shiftChosen;

    let shiftsOptionsActivatedLi = this.shiftsOptions.nativeElement.querySelector('.activate') as HTMLLIElement;
    let activatedSpan = shiftsOptionsActivatedLi!.firstChild as HTMLSpanElement;

    if(liSpan.innerHTML === ''){
      liSpan.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none"  stroke="#9E7F66" stroke-width="2" d="M1 5.897l2.767 2.767L11.432 1"/></svg>';
    } else {
      return;
    }

    shiftsOptionsActivatedLi?.classList.remove('activate');
    li.classList.add('activate');
    activatedSpan.innerHTML = '';
  }
}

