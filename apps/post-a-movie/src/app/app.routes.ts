import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'features/dashboard',
  },
  {
    path: 'features',
    loadChildren: () =>
      import('@avans-indiv-p2/frontend/features').then(
        (esModule) => esModule.FeaturesModule
      ),
  },
];
