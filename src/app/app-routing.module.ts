import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {LocationsComponent} from './locations/locations.component';

const routes: Routes = [
  { path: '', component: LandingComponent, data: {animation: 'LandingPage'} },
  { path: 'neredeyiz', component: LocationsComponent, data: {animation: 'LocationPage'} },
  { path: '**', component: LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
