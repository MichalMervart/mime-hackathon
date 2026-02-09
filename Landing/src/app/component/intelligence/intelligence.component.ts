import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NgxMarqueeComponent } from '@omnedia/ngx-marquee';
import * as AOS from 'aos';

@Component({
  selector: 'app-intelligence',
  imports: [NgxMarqueeComponent],
  templateUrl: './intelligence.component.html',
  styleUrl: './intelligence.component.css'
})
export class IntelligenceComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit(): void {

    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 800,
        easing: 'ease',
        once: true,
        mirror: false,
      });
    }
  }
}
