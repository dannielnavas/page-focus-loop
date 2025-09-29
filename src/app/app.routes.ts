import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./landing/page/landing/landing').then((m) => m.Landing),
    title: 'Focus Loop',
  },
];
