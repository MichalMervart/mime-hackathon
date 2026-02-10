import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent {
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
  
  activeIndex: number | null = null;

  accordionItems = [
    {
      title: 'Co je (R)evoluce v e-commerce?',
      content: '(R)evoluce v e-commerce je hackathon zaměřený na tvorbu inovativních řešení v oblasti e-commerce. Za tři dny vytvoříte funkční MVP produktu s pomocí mentorů a týmu.'
    },
    {
      title: 'Kdy a kde se hackathon koná?',
      content: 'Hackathon se koná od 27. února do 1. března 2026 v prostorách na adrese Čechyňská 547/5, Brno-střed. Začátek je v pátek 27. února v 16:00.'
    },
    {
      title: 'Musím mít vlastní tým?',
      content: 'Ne, můžete přijít i sami! Týmy vytvoříme na místě podle vašich dovedností a zájmů. Samozřejmě můžete přijít i s vlastním týmem.'
    },
    {
      title: 'Potřebuji nějaké speciální dovednosti?',
      content: 'Vítáme účastníky s různými dovednostmi - vývojáře, designéry, projektové manažery i podnikatele. Důležitá je motivace a chuť tvořit.'
    },
    {
      title: 'Je zajištěno ubytování a strava?',
      content: 'Občerstvení je zajištěno po celou dobu akce. Můžete spát v kanceláři (stačí si vzít sebou karimatku a spacák), popřípadě v okolí jsou i hotely.'
    },
    {
      title: 'Co si mám vzít s sebou?',
      content: 'Přineste si notebook, nabíječku a dobrou náladu. Externí monitory máme k dispozici. Vše ostatní (občerstvení, Wi-Fi, workspace) zajistíme my.'
    },
    {
      title: 'Jak se můžu registrovat?',
      content: 'Registrace probíhá přes registrační formulář na této stránce. Stačí kliknout na tlačítko "Chci se zapojit" a vyplnit své údaje.'
    },
    {
      title: 'Kolik stojí účast?',
      content: 'Účast na hackathonu je zdarma. Zahrnuje občerstvení, přístup k mentorům a všem workshopům během celého víkendu.'
    }
  ];

  toggleAccordion(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
