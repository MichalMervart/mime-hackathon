import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { jarallax } from 'jarallax';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-ticket-options',
  imports: [CommonModule, RouterLink],
  templateUrl: './ticket-options.component.html',
  styleUrl: './ticket-options.component.css'
})
export class TicketOptionsComponent {

  @ViewChild('Carousel') testimonialCarousel!: ElementRef;

  ngOnInit(): void {
    register();
    const elements = document.querySelectorAll('.jarallax');
    const options = {
      speed: 0.5,
    };
    jarallax(elements, options);
  }

  ngAfterViewInit(): void {
    new Swiper(this.testimonialCarousel.nativeElement, {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 30,
      grabCursor: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      mousewheel: {
        forceToAxis: true,   // scrolls only horizontally (not vertical page scroll)
        releaseOnEdges: true // lets user scroll page when at first/last slide
      },
      breakpoints: {
        375: {
          slidesPerView: 1.5,
          spaceBetween: 20
        },
        557: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
    });
  }

  tickets = [
    {
      name: 'Standard',
      price: '$299',
      date: 'October 1 to 5 - 10:00 AM',
      style: '',
      benefits: [
        'Access to keynotes and sessions.',
        'Admission to exhibitions and demos.',
        'Networking opportunities.',
        'Digital materials and session recordings.'
      ]
    },
    {
      name: 'VIP',
      price: '$699',
      date: 'October 1 to 5 - 10:00 AM',
      style: '',
      benefits: [
        'All Standard benefits.',
        'VIP lounge access and exclusive events.',
        'Front-row seating and priority workshop access.',
        'VIP swag bag and exclusive content.'
      ]
    },
    {
      name: 'Full Access',
      price: '$1199',
      date: 'October 1 to 5 - 10:00 AM',
      style: 's2',
      benefits: [
        'All VIP benefits.',
        'Access to all workshops and breakout sessions.',
        'Personalized session scheduling.',
        'Speaker meet-and-greet and after-party access.'
      ]
    },
    {
      name: 'Exclusive Access',
      price: '$2499',
      date: 'October 1 to 5 - 10:00 AM',
      style: 's2',
      benefits: [
        'All Full Access Pass benefits.',
        'Private one-on-one sessions with speakers.',
        'Priority access to all events and workshops.',
        'Exclusive VIP gala and after-party invitations.'
      ]
    },
    {
      name: 'Student',
      price: '$149',
      date: 'October 1 to 5 - 10:00 AM',
      style: 's3',
      benefits: [
        'Access to keynotes and workshops.',
        'Student-specific networking events.',
        'Discounted online resources post-event.',
        'Special student meetups for networking.'
      ]
    },
    {
      name: 'Virtual',
      price: '$99',
      date: 'October 1 to 5 - 10:00 AM',
      style: 's3',
      benefits: [
        'Live-streamed keynotes and workshops.',
        'On-demand access to recorded sessions.',
        'Interactive Q&A with speakers.',
        'Virtual networking and digital swag.'
      ]
    }
  ];
}
