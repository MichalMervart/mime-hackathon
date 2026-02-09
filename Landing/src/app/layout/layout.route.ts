import { Routes } from "@angular/router";
import { IndexComponent } from "../Pages/index/index.component";
import { IndexSliderComponent } from "../Pages/index-slider/index-slider.component";
import { IndexCountdownComponent } from "../Pages/index-countdown/index-countdown.component";
import { IndexSliderTextComponent } from "../Pages/index-slider-text/index-slider-text.component";
import { IndexStaticBackgroundComponent } from "../Pages/index-static-background/index-static-background.component";

export const PAGE_ROUTES: Routes = [

    { path: '', component: IndexComponent, data: { title: 'index' } },
    { path: 'index-slider', component: IndexSliderComponent, data: { title: 'index' } },
    { path: 'index-countdown', component: IndexCountdownComponent, data: { title: 'index' } },
    { path: 'index-slider-text', component: IndexSliderTextComponent, data: { title: 'index' } },
    { path: 'index-static-background', component: IndexStaticBackgroundComponent, data: { title: 'index' } },

]