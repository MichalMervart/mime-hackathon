import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-event-schedule',
  imports: [CommonModule],
  templateUrl: './event-schedule.component.html',
  styleUrl: './event-schedule.component.css'
})
export class EventScheduleComponent {
  activeDay: number = 0;

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

  selectDay(index: number): void {
    this.activeDay = index;
  }

  schedule = [
    {
      day: 'Den 1',
      date: 'Pátek 27.2.',
      sessions: [
        {
          time: '16:00',
          img: 'assets/images/img/bude-doplneno.png',
          name: 'Organizační tým',
          role: '',
          title: 'Registrace a uvítání',
          desc: 'Prezence účastníků, vyzvednutí jmenovek a úvodní informace o průběhu hackathonu.'
        },
        {
          time: '16:30',
          img: 'assets/images/img/bude-doplneno.png',
          name: 'Hlavní organizátor',
          role: '',
          title: 'Úvodní keynote',
          desc: 'Představení tématu "E(R)voluce v e-commerce", cílů hackathonu a inspirace pro účastníky.'
        },
        {
          time: '17:00',
          img: 'assets/images/img/bude-doplneno.png',
          name: 'Účastníci',
          role: '',
          title: 'Pitch nápadů a formování týmů',
          desc: 'Každý účastník může představit svůj nápad (60 sekund). Následuje networking a vytváření týmů.'
        },
        {
          time: '18:30',
          img: 'assets/images/img/bude-doplneno.png',
          name: 'Všichni',
          role: '',
          title: 'Večeře a networking',
          desc: 'Společná večeře, neformální setkávání a dokončení formování týmů.'
        },
        {
          time: '19:30',
          img: 'assets/images/img/bude-doplneno.png',
          name: 'Týmy',
          role: '',
          title: 'Zahájení práce na projektech',
          desc: 'Týmy začínají pracovat na svých nápadech. Brainstorming, plánování a první kroky vývoje.'
        }
      ]
    },
    {
      day: 'Den 2',
      date: 'Sobota 28.2.',
      sessions: [
        {
          time: '09:00',
          img: 'assets/images/img/bude-doplneno.png',
          name: 'Všichni',
          role: '',
          title: 'Ranní rozcvička a snídaně',
          desc: 'Společné zahájení dne s energií. Snídaně a příprava na intenzivní pracovní den.'
        },
        {
          time: '09:30',
          img: 'assets/images/img/bude-doplneno.png',
          name: 'Týmy',
          role: '',
          title: 'Práce na projektech',
          desc: 'Plný den vývoje. Týmy pracují na implementaci svých MVP s podporou mentorů.'
        },
        {
          time: '12:00',
          img: 'assets/images/img/bude-doplneno.png',
          name: 'Všichni',
          role: '',
          title: 'Oběd',
          desc: 'Společný oběd a krátká přestávka na načerpání energie.'
        },
        {
          time: '13:00',
          img: 'assets/images/img/bude-doplneno.png',
          name: 'Mentoři',
          role: '',
          title: 'Workshopy a mentoring',
          desc: 'Paralelní workshopy zaměřené na konkrétní technologie, UX design a business strategii.'
        },
        {
          time: '15:00',
          img: 'assets/images/img/bude-doplneno.png',
          name: 'Týmy',
          role: '',
          title: 'Pokračování vývoje',
          desc: 'Týmy pokračují v práci na svých projektech s integrací poznatků z workshopů.'
        },
        {
          time: '18:00',
          img: 'assets/images/img/bude-doplneno.png',
          name: 'Všichni',
          role: '',
          title: 'Večeře',
          desc: 'Společná večeře a krátká odreagování před večerním pokračováním.'
        }
      ]
    },
    {
      day: 'Den 3',
      date: 'Neděle 1.3.',
      sessions: [
        {
          time: '09:00',
          img: 'assets/images/img/bude-doplneno.png',
          name: 'Všichni',
          role: '',
          title: 'Snídaně a finální sprint',
          desc: 'Ranní snídaně a poslední intenzivní fáze dokončování projektů a příprava prezentací.'
        },
        {
          time: '10:30',
          img: 'assets/images/img/bude-doplneno.png',
          name: 'Týmy',
          role: '',
          title: 'Prezentace projektů',
          desc: 'Každý tým představí svůj projekt před porotou (5 minut prezentace + 3 minuty Q&A).'
        },
        {
          time: '11:30',
          img: 'assets/images/img/bude-doplneno.png',
          name: 'Porota',
          role: '',
          title: 'Hodnocení a vyhlášení výsledků',
          desc: 'Porota hodnotí projekty, vybírá vítěze a vyhlašuje výsledky.'
        },
        {
          time: '12:00',
          img: 'assets/images/img/bude-doplneno.png',
          name: 'Organizační tým',
          role: '',
          title: 'Závěr akce',
          desc: 'Předání cen, závěrečné poděkování všem účastníkům a oficiální ukončení hackathonu.'
        }
      ]
    }
  ];

}
