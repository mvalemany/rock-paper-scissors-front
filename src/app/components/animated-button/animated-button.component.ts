import { Component, Input } from '@angular/core';
import { oHoverTrigger } from 'src/app/components/animations/animation';

@Component({
  selector: 'app-animated-button',
  templateUrl: './animated-button.component.html',
  styleUrls: ['./animated-button.component.css'],
  animations: [oHoverTrigger]
})

export class AnimatedButtonComponent {
  @Input() text = '';
  @Input() onClick = () => { };

  isMouseOver = false;

  hover(isOver: boolean) {
    this.isMouseOver = isOver;
  }

  click() {
    this.onClick();
  }

}
