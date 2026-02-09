import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { IndexSelectComponent } from './Pages/index-select/index-select.component';
import { NewsComponent } from './Pages/news/news.component';
import { NewsSingleComponent } from './Pages/news-single/news-single.component';
import { TicketsComponent } from './Pages/tickets/tickets.component';
import { Tickets2Component } from './Pages/tickets-2/tickets-2.component';
import { ContactComponent } from './Pages/contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        loadChildren: () =>
            import('./layout/layout.route').then((mod) => mod.PAGE_ROUTES),
    },
    { path: 'index-select', component: IndexSelectComponent, data: { title: 'index' } },
    { path: 'news', component: NewsComponent, data: { title: 'index' } },
    { path: 'news-single', component: NewsSingleComponent, data: { title: 'index' } },
    { path: 'tickets', component: TicketsComponent, data: { title: 'index' } },
    { path: 'tickets-2', component: Tickets2Component, data: { title: 'index' } },
    { path: 'contact', component: ContactComponent, data: { title: 'index' } },
]
