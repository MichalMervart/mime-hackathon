import { Component } from '@angular/core';
import { NavbarComponent } from "../component/navbar/navbar.component";
import { IntelligenceComponent } from "../component/intelligence/intelligence.component";
import { AboutComponent } from "../component/about/about.component";
import { GlobalNetworkingComponent } from "../component/global-networking/global-networking.component";
import { TestimonialComponent } from "../component/testimonial/testimonial.component";
import { SpeakersComponent } from "../component/speakers/speakers.component";
import { PartnersComponent } from "../component/partners/partners.component";
import { EventScheduleComponent } from "../component/event-schedule/event-schedule.component";
import { TicketOptionsComponent } from "../component/ticket-options/ticket-options.component";
import { EventLocationComponent } from "../component/event-location/event-location.component";
import { FaqComponent } from "../component/faq/faq.component";
import { SubscriptionComponent } from "../component/subscription/subscription.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../component/footer/footer.component";

@Component({
  selector: 'app-layout',
  imports: [NavbarComponent, IntelligenceComponent, RouterOutlet, AboutComponent, GlobalNetworkingComponent, TestimonialComponent, SpeakersComponent, PartnersComponent, EventScheduleComponent, TicketOptionsComponent, EventLocationComponent, FaqComponent, SubscriptionComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
