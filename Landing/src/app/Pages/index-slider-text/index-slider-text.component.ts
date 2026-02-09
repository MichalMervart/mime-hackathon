import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import * as AOS from 'aos';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-index-slider-text',
  imports: [CommonModule],
  templateUrl: './index-slider-text.component.html',
  styleUrl: './index-slider-text.component.css'
})
export class IndexSliderTextComponent {
  @ViewChild('testimonialCarousel') testimonialCarousel!: ElementRef;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  
  ngOnInit(): void {
    register();
  }

  ngAfterViewInit(): void {
    new Swiper(this.testimonialCarousel.nativeElement, {
      slidesPerView: 1,
      centeredSlides: true,
      loop: true,
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

  slides = [
    {
      title: 'Unleashing Human Potential Through AI',
      date: 'October 1–5, 2025',
      location: 'San Francisco, CA',
      bg: 'assets/images/slider/3.webp'
    },
    {
      title: 'Join the Minds Building the Future AI',
      date: 'October 1–5, 2025',
      location: 'San Francisco, CA',
      bg: 'assets/images/slider/4.webp'
    }
  ];

}
