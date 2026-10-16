import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'app-remote-root',
  standalone: true,
  template: `
    <app-remote-header />
    <router-outlet />
  `,
  imports: [HeaderComponent, RouterOutlet],
})
export class AppComponent {}
