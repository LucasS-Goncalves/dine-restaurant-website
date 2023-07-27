import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import * as customValidators from 'src/app/validator';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit{

  reservationForm!: FormGroup;
  thisYear = new Date().getFullYear();
  formSubmitted = false;
  isFormValid = false;
  thisHours = (new Date().getHours() % 12 || 12);
  thisMinutes = (new Date().getMinutes());
  shiftPicked = 'AM';
  people = 1;
  @ViewChild('shifts_div') shifts_div!: ElementRef<HTMLDivElement>;
  @ViewChild('shiftsOptions') shiftsOptions!: ElementRef<HTMLUListElement>;
  @ViewChild('peopleInput') peopleInput!: ElementRef<HTMLInputElement>;

  ngOnInit(): void {

    this.reservationForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'fullDate': new FormGroup({
        'month': new FormControl(null, Validators.required),
        'date': new FormControl(null, Validators.required),
        'year': new FormControl(null, Validators.required)
      }, {validators: customValidators.dateValidator}),
      'time': new FormGroup({
        'hour': new FormControl(null, [Validators.required]),
        'minute': new FormControl(null, [Validators.required]),
        'shift': new FormControl(this.shiftPicked, [Validators.required]),
      }, {validators: customValidators.timeValidator}),
      'people': new FormControl(this.people, Validators.required)
    })
  }

  decreaseNumberOfPeople(){
    this.people -= 1;
    this.reservationForm.get('people')?.patchValue(this.people);
  }

  increaseNumberOfPeople(){
    this.people += 1;
    this.reservationForm.get('people')?.patchValue(this.people);
  }

  openShiftsDiv(){
    this.shifts_div.nativeElement.classList.toggle('open');
  }

  switchShifts(event: Event){
    const li = event.target as HTMLLIElement;
    let liSpan = li.firstChild as HTMLSpanElement;
    const shiftChosen = li.textContent as string;
    this.shiftPicked = shiftChosen;
    this.reservationForm.get('time.shift')?.patchValue(this.shiftPicked);

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

  isValid(){
    this.isFormValid = true;
  }

  onSubmit(){
    this.isFormValid = false;
    this.formSubmitted = true;
    console.log(this.reservationForm.value);
  }
}



