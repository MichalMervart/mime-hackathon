import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  headerClass: string = 'transparent';
  activeSection: string = 'section-hero';
  isMobileMenuOpen: boolean = false;

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeSection = sectionId;
      this.closeMobileMenu();
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (scrollY > 50) {
      this.headerClass = 'transparent clone smaller';
    } else {
      this.headerClass = 'transparent';
    }

    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    sections.forEach((section) => {
      const offset = section.offsetTop - 120;
      const height = section.offsetHeight;

      if (scrollY >= offset && scrollY < offset + height) {
        this.activeSection = section.getAttribute('id')!;
      }
    });
  }
}
