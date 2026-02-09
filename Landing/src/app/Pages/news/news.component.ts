import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import * as AOS from 'aos';
import { jarallax } from 'jarallax';
import { FooterComponent } from "../../component/footer/footer.component";
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../component/navbar/navbar.component";

@Component({
  selector: 'app-news',
  imports: [FooterComponent, CommonModule, RouterLink, NavbarComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
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

  // 🔹 News Items
  newsItems = [
    { day: '28', month: 'May', img: 'assets/images/news/s1.webp', title: 'The AI Conference 2025 Set to Discuss AGI and Neural Architectures in SF' },
    { day: '27', month: 'May', img: 'assets/images/news/s2.webp', title: 'Tony Blair Advocates for AI Integration in UK Healthcare and Education' },
    { day: '26', month: 'May', img: 'assets/images/news/s3.webp', title: "Apple's WWDC 2025 Faces Low Investor Expectations Over Siri AI Delay" },
    { day: '25', month: 'May', img: 'assets/images/news/s4.webp', title: "NYC Tech Week Highlights Human Skills' Value in AI-Dominated Discussions" },
    { day: '24', month: 'May', img: 'assets/images/news/s5.webp', title: 'Data + AI Summit 2025 to Explore Data Engineering and Machine Learning' },
    { day: '23', month: 'May', img: 'assets/images/news/s6.webp', title: 'World Summit AI 2025 in Amsterdam to Focus on Generative AI Trends' }
  ];

  // 🔹 Pagination
  pagination = { current: 2, pages: [1, 2, 3] };
}
