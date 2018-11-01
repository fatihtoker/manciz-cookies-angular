import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  lat = 39.790618;
  long = 30.495760;

  constructor() { }

  ngOnInit() {
  }

}
