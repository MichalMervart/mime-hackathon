import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import * as AOS from 'aos';
import { jarallax } from 'jarallax';

@Component({
  selector: 'app-event-location',
  imports: [CommonModule],
  templateUrl: './event-location.component.html',
  styleUrl: './event-location.component.css'
})
export class EventLocationComponent {

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
  ngOnInit(): void {
    const elements = document.querySelectorAll('.jarallax');
    const options = {
      speed: 0.5,
    };
    jarallax(elements, options);
  }
  venueDetails = [
    {
      icon: 'icofont-google-map',
      title: 'Adresa',
      info: 'Čechyňská 547/5, Brno-střed',
      delay: 200
    },
    {
      icon: 'icofont-clock-time',
      title: 'Začátek',
      info: '27. února 2026, 16:00',
      delay: 400
    },
    {
      icon: 'icofont-culinary',
      title: 'Občerstvení',
      info: 'Zajištěno po celou dobu akce',
      delay: 600
    },
    {
      icon: 'icofont-wifi',
      title: 'Wi-Fi',
      info: 'Vysokorychlostní připojení',
      delay: 800
    },
    {
      icon: 'icofont-bed',
      title: 'Co si vzít',
      info: 'Notebook, nabíječku, dobrou náladu',
      delay: 1000
    },
    {
      icon: 'icofont-users-alt-4',
      title: 'Týmy',
      info: 'Můžete přijít i sami, týmy vytvoříme na místě',
      delay: 1200
    }
  ];
}
