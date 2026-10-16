import { APP_BASE_HREF } from '@angular/common';
import { EnvironmentProviders, Provider } from '@angular/core';
import { provideRouter, Routes, withComponentInputBinding } from '@angular/router';

import { AboutComponent } from './pages/about.component';
import { HomeComponent } from './pages/home.component';
import { NotFoundComponent } from './pages/not-found.component';
import { UserDetailsComponent } from './pages/user-details.component';
import { UserListComponent } from './pages/user-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    // A parent route keeps the "Users" link active on `/users/:id` too.
    path: 'users',
    children: [
      { path: '', component: UserListComponent },
      { path: ':id', component: UserDetailsComponent },
    ],
  },
  // Without a wildcard Angular throws `Cannot match any routes` on unknown URLs.
  { path: '**', component: NotFoundComponent },
];

/**
 * Router providers with every route resolved under `basename`: `/` when the
 * remote runs standalone, the prefix the host chose (e.g. `/remote-ang`) when
 * it is mounted there.
 */
export const provideAppRouter = (basename: string): (Provider | EnvironmentProviders)[] => [
  provideRouter(routes, withComponentInputBinding()),
  { provide: APP_BASE_HREF, useValue: basename },
];
