import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'About',
    pathMatch: 'full',
    redirectTo: 'AboutComponent',
  },
];
