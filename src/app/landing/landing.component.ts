import { Component, OnInit } from '@angular/core';
import {trigger, transition, useAnimation, state, style, animate} from '@angular/animations';
import {fadeInDown, fadeInUp} from 'ng-animate';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('status', [
      state('collapsed', style({
        display: 'none',
        opacity: 0,
        transform: 'translateY(5%)',
      })),
      state('expanded', style({
        display: 'block',
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('collapsed => expanded', animate('450ms ease-out')),
      transition('expanded  => collapsed', animate('450ms ease-in'))
    ])
  ]
})
export class LandingComponent implements OnInit {
  hidden = true;
  constructor() { }

  ngOnInit() {

  }

  onIconClicked() {
    this.hidden = !this.hidden;
  }

}
