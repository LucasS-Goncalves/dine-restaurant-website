import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { BookingComponent } from './components/booking/booking.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'booking', component: BookingComponent },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
