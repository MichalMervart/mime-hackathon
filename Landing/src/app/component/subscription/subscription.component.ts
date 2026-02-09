import { Component } from '@angular/core';
import { jarallax } from 'jarallax';

@Component({
  selector: 'app-subscription',
  imports: [],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent {
  ngOnInit(): void {
    const elements = document.querySelectorAll('.jarallax');
    const options = {
      speed: 0.5,
    };
    jarallax(elements, options);
  }
}
