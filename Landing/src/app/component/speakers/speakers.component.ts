import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-speakers',
  imports: [CommonModule],
  templateUrl: './speakers.component.html',
  styleUrl: './speakers.component.css'
})
export class SpeakersComponent {
  speakers = [
    {
      name: 'Bude upřesněno',
      title: 'Název pozice',
      image: 'assets/images/img/bude-doplneno.png'
    },
    {
      name: 'Bude upřesněno',
      title: 'Název pozice',
      image: 'assets/images/img/bude-doplneno.png'
    },
    {
      name: 'Michal Mervart',
      title: 'CEO, mime digital',
      image: 'assets/images/img/michal-mervart.png'
    }
  ];

}
