import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs';
import { slideInLeftAnimation, slideInRightAnimation, slideOutLeftAnimation, slideOutRightAnimation ,} from 'angular-animations';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    slideInLeftAnimation({duration: 500}),
    slideInRightAnimation({duration: 500}),
    slideOutLeftAnimation({duration: 500}),
    slideOutRightAnimation({duration: 500}),
  ]
})
export class SliderComponent  {
  @Input() isIn = true;
  @Input() left = true;

  get right() {
    return !this.left;
  }

  get isOut() {
    return !this.isIn;
  }
}