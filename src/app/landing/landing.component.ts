import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
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
  girl = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    speedX: 5,
    speedY: 5
  };
  transform3d = {
    x: 0,
    y: 0,
    z: 0
  };
  windowWidth = window.outerWidth;
  windowHeight = window.outerHeight;
  transform: any;
  hidden = false;
  loopAnimation: any;
  @ViewChild('girl')
  girlRef: ElementRef;
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
    this.loopAnimation.pause();
    this.calculation();
  }
  onIconClicked() {
    this.hidden = !this.hidden;
    //this.transform = `translate3d(${this.girlX}px, ${this.girlY}px, 0)`;
    console.log(this.girl);
    //setInterval(this.loop, 1000);
    this.loop();
    //console.log(this.girl.nativeElement.offsetLeft);
    //console.log(this.girl.nativeElement.offsetHeight);
    //console.log(screen.availWidth);
  }
  calculation() {
    this.girl.x = this.girlRef.nativeElement.offsetLeft;
    this.girl.y = this.girlRef.nativeElement.offsetTop;
    this.girl.height = this.girlRef.nativeElement.offsetHeight;
    this.girl.width = this.girlRef.nativeElement.offsetWidth;
  }
  loop() {
    console.log('inside loop()');
    console.log(this.transform3d);
    console.log(this.girl);
      if (this.transform3d.x < this.girl.x) {
        this.transform3d.x -= this.girl.speedX;
      } else {
        if (this.transform3d.x >= this.windowWidth - this.girl.x) {
          this.transform3d.x -= this.girl.speedX;
        }
        this.transform3d.x += this.girl.speedX;
      }
      this.transform = `translate3d(${this.transform3d.x}px, ${this.transform3d.y}px, 0)`;
  }
}
