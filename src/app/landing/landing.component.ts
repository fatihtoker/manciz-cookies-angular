import {AfterViewInit, Component, OnInit} from '@angular/core';
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
    ]),
    trigger('size', [
      state('big', style({
        transform: 'translateY(40%)'
      })),
      transition('big <=> normal', animate('450ms ease-in'))
    ])
  ]
})
export class LandingComponent implements AfterViewInit, OnInit {
  hidden = false;
  isBig = false;
  girl = {
    size: function (big) {
      return big ? 'lg' : 'md';
    },
    class: function (big) {
      return big ? 'col-12 col-md-8 col-lg-6' : 'col-9 col-md-6 col-lg-4';
    }
  };
  loopAnimation: any;
  loopAnimationBig: any;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.loopAnimation = anime({
      targets: '.col-girl',
      translateY: '10%',
      direction: 'alternate',
      loop: true,
      duration: 500,
      easing: 'easeInSine',
    });
    this.loopAnimationBig = anime({
      targets: '.col-girl',
      translateY: ['40%', '50%'],
      direction: 'alternate',
      loop: true,
      duration: 500,
      easing: 'easeInSine',
      autoplay: false
    });
  }
  onIconClicked() {
    this.hidden = !this.hidden;
    this.isBig = !this.isBig;
    if (this.isBig) {
      this.loopAnimation.pause();
      this.loopAnimationBig.play();
    } else {
      this.loopAnimationBig.pause();
      this.loopAnimation.play();
    }
  }
  onGirlClicked() {
    this.hidden = !this.hidden;
    this.isBig = !this.isBig;
  }
}
