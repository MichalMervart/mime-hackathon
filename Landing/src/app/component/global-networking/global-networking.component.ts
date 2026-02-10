import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-global-networking',
  imports: [CommonModule],
  templateUrl: './global-networking.component.html',
  styleUrl: './global-networking.component.css'
})
export class GlobalNetworkingComponent {

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

  whyAttendList = [
    {
      title: 'Praktické zkušenosti',
      desc: `Vytvořte reálný funkční produkt za jeden víkend s pomocí mentorů a odborníků.`,
      icon: 'fa-solid fa-code'
    },
    {
      title: 'Týmová práce',
      desc: `Spolupracujte s designéry, vývojáři a podnikateli na společném projektu.`,
      icon: 'fa-solid fa-users'
    },
    {
      title: 'Networking',
      desc: `Poznejte stejně smýšlející lidi z oboru a navažte cenné kontakty.`,
      icon: 'fa-solid fa-handshake'
    },
    {
      title: 'MVP za 3 dny',
      desc: `Zažijte, jak rychle můžete přejít od nápadu k funkčnímu produktu.`,
      icon: 'fa-solid fa-rocket'
    },
    {
      title: 'Mentoring',
      desc: `Získejte rady a zpětnou vazbu od zkušených profesionálů z oboru.`,
      icon: 'fa-solid fa-chalkboard-user'
    },
    {
      title: 'Prize pool 50 000 Kč',
      desc: `V sázce je celkem 50 000 Kč. Jak přesně bude prize pool rozdělen? To se dozvíte až na místě.`,
      icon: 'fa-solid fa-trophy'
    }
  ];
}
