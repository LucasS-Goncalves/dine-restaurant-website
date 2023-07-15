import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { BookingComponent } from './components/booking/booking.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'booking', component: BookingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
