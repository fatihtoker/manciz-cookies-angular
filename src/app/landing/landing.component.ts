import {AfterViewInit, Component} from '@angular/core';
import {trigger, transition, state, style, animate} from '@angular/animations';
import anime from 'animejs';

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
export class LandingComponent implements AfterViewInit {
  hidden = false;
  bounce = false;
  loopAnimation: any;
  constructor() { }

  ngAfterViewInit() {
    this.loopAnimation = anime({
      targets: '.col-girl',
      translateY: 50,
      direction: 'alternate',
      loop: true,
      duration: 500,
      easing: 'easeInSine'
    });
  }
  onIconClicked() {
    this.hidden = !this.hidden;
    this.bounce = !this.bounce;
  }
}
