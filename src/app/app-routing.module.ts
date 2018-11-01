import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {LocationsComponent} from './locations/locations.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'neredeyiz', component: LocationsComponent },
  { path: '**', component: LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
