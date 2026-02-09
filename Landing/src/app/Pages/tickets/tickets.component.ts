import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FooterComponent } from "../../component/footer/footer.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';
import { jarallax } from 'jarallax';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../component/navbar/navbar.component";
interface Ticket {
  name: string;
  price: number;
  benefits: string[];
  available: number;
  quantity: number;
}

interface CartItem {
  name: string;
  quantity: number;
  price: number;
  available: number;
}

@Component({
  selector: 'app-tickets',
  imports: [FooterComponent, CommonModule, NavbarComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
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


  tickets: Ticket[] = [
    {
      name: 'Standard',
      price: 299,
      benefits: [
        'Access to keynotes and sessions.',
        'Admission to exhibitions and demos.',
        'Networking opportunities.',
        'Digital materials and session recordings.'
      ],
      available: 100,
      quantity: 0
    },
    {
      name: 'VIP',
      price: 699,
      benefits: [
        'All Standard benefits.',
        'VIP lounge access and exclusive events.',
        'Front-row seating and priority workshop access.',
        'VIP swag bag and exclusive content.'
      ],
      available: 100,
      quantity: 0
    },
    {
      name: 'Full Access Pass',
      price: 1199,
      benefits: [
        'All VIP benefits.',
        'Access to all workshops and breakout sessions.',
        'Personalized session scheduling.',
        'Speaker meet-and-greet and after-party access.'
      ],
      available: 100,
      quantity: 0
    },
    {
      name: 'Exclusive Access',
      price: 2499,
      benefits: [
        'All Full Access Pass benefits.',
        'Private one-on-one sessions with speakers.',
        'Priority access to all events and workshops.',
        'Exclusive VIP gala and after-party invitations.'
      ],
      available: 100,
      quantity: 0
    },
    {
      name: 'Student',
      price: 149,
      benefits: [
        'Access to keynotes and workshops.',
        'Student-specific networking events.',
        'Discounted online resources post-event.',
        'Special student meetups for networking.'
      ],
      available: 100,
      quantity: 0
    },
    {
      name: 'Virtual',
      price: 99,
      benefits: [
        'Live-streamed keynotes and workshops.',
        'On-demand access to recorded sessions.',
        'Interactive Q&A with speakers.',
        'Virtual networking and digital swag.'
      ],
      available: 100,
      quantity: 0
    }
  ];

  // Add to cart by increasing quantity
  increase(ticket: Ticket) {
    ticket.quantity++;
  }

  // Remove one from cart
  decrease(ticket: Ticket) {
    if (ticket.quantity > 0) ticket.quantity--;
  }

  // Remove completely from cart
  delete(ticket: Ticket) {
    ticket.quantity = 0;
  }

  // Get tickets in cart
  get cart() {
    return this.tickets.filter(t => t.quantity > 0);
  }

  // Calculate total
  get total() {
    return this.cart.reduce((sum, t) => sum + t.price * t.quantity, 0);
  }

  cartItems: CartItem[] = [
    { name: 'Standard', quantity: 2, price: 299, available: 100 },
    { name: 'VIP', quantity: 1, price: 699, available: 100 },
    { name: 'Full Access Pass', quantity: 1, price: 1199, available: 100 },
    { name: 'Exclusive Access', quantity: 1, price: 2499, available: 100 },
    { name: 'Student', quantity: 1, price: 149, available: 100 },
    { name: 'Virtual', quantity: 1, price: 99, available: 100 }
  ];

  deleteItem(index: number) {
    this.cartItems.splice(index, 1);
  }
}
