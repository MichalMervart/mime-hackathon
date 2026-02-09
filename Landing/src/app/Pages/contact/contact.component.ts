import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FooterComponent } from "../../component/footer/footer.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';
import { jarallax } from 'jarallax';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../component/navbar/navbar.component";

@Component({
  selector: 'app-contact',
  imports: [FooterComponent, CommonModule, NavbarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
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

}
