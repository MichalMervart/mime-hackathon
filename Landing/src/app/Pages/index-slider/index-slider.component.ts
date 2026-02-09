import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import * as AOS from 'aos';
import Swiper from 'swiper';

@Component({
  selector: 'app-index-slider',
  imports: [CommonModule],
  templateUrl: './index-slider.component.html',
  styleUrl: './index-slider.component.css'
})
export class IndexSliderComponent {

  @ViewChild('testimonialCarousel') testimonialCarousel!: ElementRef;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  images = [
    'assets/images/slider/1.webp',
    'assets/images/slider/2.webp'
  ];

  ngAfterViewInit(): void {
    new Swiper(this.testimonialCarousel.nativeElement, {
      slidesPerView: 1,
      loop: true,
      centeredSlides: true,
      spaceBetween: 30,
      grabCursor: true,
      autoplay: {
        delay: 3000, // Slide will automatically change every 3 seconds
        disableOnInteraction: false, // Keep autoplay active even after manual interaction (swiping)
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      breakpoints: {
        375: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        557: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 1,
          spaceBetween: 20
        }
      }
    });

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
