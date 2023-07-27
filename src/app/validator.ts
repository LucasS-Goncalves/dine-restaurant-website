import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export const dateValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

  const month = control.get('month')?.value;
  const date = control.get('date')?.value;
  const year = control.get('year')?.value;

  const thisDate = new Date().getDate();
  const thisMonth = (new Date().getMonth() + 1);
  const thisYear = (new Date().getFullYear());

  if(!Number.isInteger(month) || !Number.isInteger(date)){return {validDate: true}};
  if(month === thisMonth && year === thisYear && date <= thisDate){return {validDate: true}};
  if(month < thisMonth && year === thisYear){return {validDate: true}};

  return (((month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) && date > 0 && date < 32) || ((month === 4 || month === 6 || month === 9 || month === 11) && date > 0 && date < 31) || (month === 2 && date > 0 && date < 29) || (month === 2 && date > 0 && date < 30 && year % 4 === 0)) && (year >= thisYear && year <= thisYear + 2) ? null : {validDate: true};
}

export const timeValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const hour = +control.get('hour')?.value;
  const minute = +control.get('minute')?.value;

  if(!Number.isInteger(hour) || !Number.isInteger(minute)){return {validTime: true}};

  return (hour > 0 && hour < 13 && minute >= 0 && minute < 60) ? null : {validTime: true};
}
