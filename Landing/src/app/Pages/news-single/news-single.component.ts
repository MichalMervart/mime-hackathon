import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FooterComponent } from "../../component/footer/footer.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';
import { jarallax } from 'jarallax';
import { NavbarComponent } from "../../component/navbar/navbar.component";

@Component({
  selector: 'app-news-single',
  imports: [FooterComponent, CommonModule, NavbarComponent],
  templateUrl: './news-single.component.html',
  styleUrl: './news-single.component.css'
})
export class NewsSingleComponent {
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

  // ✅ Demo Previews inside Mega Menu
  demoPreviews = [
    { img: 'assets/images/demo/homepage-1.webp', link: 'index.html', title: 'Demo 1' },
    { img: 'assets/images/demo/homepage-2.webp', link: 'index-slider.html', title: 'Demo 2' },
    { img: 'assets/images/demo/homepage-3.webp', link: 'index-static-background.html', title: 'Demo 3' },
    { img: 'assets/images/demo/homepage-4.webp', link: 'index-slider-text.html', title: 'Demo 4' },
    { img: 'assets/images/demo/homepage-5.webp', link: 'index-countdown.html', title: 'Demo 5' }
  ];

  // ✅ Comments
  comments = [
    {
      name: 'Merrill Rayos',
      avatar: 'assets/images/testimonial/1.webp',
      date: '2 days ago',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...',
      replies: [
        {
          name: 'Jackqueline Sprang',
          avatar: 'assets/images/testimonial/2.webp',
          date: '2 days ago',
          text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...'
        }
      ]
    },
    {
      name: 'Sanford Crowley',
      avatar: 'assets/images/testimonial/3.webp',
      date: '2 days ago',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...',
      replies: [
        {
          name: 'Lyndon Pocekay',
          avatar: 'assets/images/testimonial/4.webp',
          date: '2 days ago',
          text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...'
        }
      ]
    },
    {
      name: 'Aleen Crigger',
      avatar: 'assets/images/testimonial/5.webp',
      date: '2 days ago',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...',
      replies: []
    }
  ];
}
