import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AgmCoreModule} from '@agm/core';
import { LocationsComponent } from './locations/locations.component';
import {MatButtonModule, MatCardModule, MatDividerModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LocationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBTSykOBHaf-fpCSNa96ihKCl6-Ei1MV4g'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
