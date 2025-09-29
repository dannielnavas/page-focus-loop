import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./landing/page/landing/landing').then((m) => m.Landing),
    title: 'Focus Loop',
  },
  {
    path: '**',
    loadComponent: () => import('./404/pages/not-found/not-found').then((m) => m.NotFound),
    title: 'Focus Loop - Not Found',
  },
];
