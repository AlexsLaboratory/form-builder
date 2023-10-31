import { Routes } from '@angular/router';
import { HomeComponent } from "@pages/home/home.component";

export const APP_ROUTES: Routes = [
  {
    path: 'about',
    loadComponent: () => import('@pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  }
];
