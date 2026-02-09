import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-index-select',
  imports: [CommonModule, RouterLink],
  templateUrl: './index-select.component.html',
  styleUrl: './index-select.component.css'
})
export class IndexSelectComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private renderer: Renderer2) { }

  ngOnInit(): void {
    // Add class to body when component loads
    this.renderer.addClass(document.body, 'section-dark');
  }

  ngOnDestroy(): void {
    // Remove class when component is destroyed (important for routing!)
    this.renderer.removeClass(document.body, 'section-dark');
  }

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


  // Menu
  menuItems = [
    { label: 'Home', link: '#section-hero', active: true },
    { label: 'Features', link: '#section-features' },
    { label: 'Demo Preview', link: '#section-demo' }
  ];

  // Features
  features = [
    {
      img: 'demo/icons/booststrap-5.png',
      title: 'Bootstrap 5 Framework',
      desc: 'AIvent using latest Bootstrap 5 framework. The most complete and flexible framework for website development.'
    },
    {
      img: 'demo/icons/flash.png',
      title: 'Blazing Speed',
      desc: 'Say goodbye to frustrating load times and hello to a seamless online experience.'
    },
    {
      img: 'demo/icons/responsive.png',
      title: 'Responsive Layouts',
      desc: 'AIvent layouts can fit to all screens sizes so it looks great on any kind of devices.'
    },
    {
      img: 'demo/icons/font-awesome-6.png',
      title: 'Font Awesome 6',
      desc: 'We include latest version of Font Awesome.'
    },
    {
      img: 'demo/icons/swiper-slider.png',
      title: 'Swiper Slider',
      desc: 'Swiper is the most modern free and open source slider with hardware accelerated transitions.'
    },
    {
      img: 'demo/icons/php.png',
      title: 'PHP Form',
      desc: 'A clean and functional PHP form that collects user input and processes it securely.'
    }
  ];

  // Demo Preview
  demoPreviews = [
    { img: 'demo/preview/homepage-1.webp', link: 'index.html', title: 'Main (Video Background)' },
    { img: 'demo/preview/homepage-2.webp', link: 'index-slider.html', title: 'Slider Background' },
    { img: 'demo/preview/homepage-3.webp', link: 'index-static-background.html', title: 'Static Background' },
    { img: 'demo/preview/homepage-4.webp', link: 'index-slider-text.html', title: 'Slider Text' },
    { img: 'demo/preview/homepage-5.webp', link: 'index-countdown.html', title: 'Video Background + Countdown' }
  ];
}
