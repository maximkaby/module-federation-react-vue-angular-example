import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-remote-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="header">
      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
      <a routerLink="/about" routerLinkActive="active">About</a>
      <a routerLink="/users" routerLinkActive="active">Users</a>
    </nav>
  `,
  styles: `
    .header {
      display: flex;
      gap: 20px;
      padding: 15px 20px;
      background: #1f2124;
      border-radius: 5px;
      margin: 20px;
    }

    .header a {
      color: white;
      text-decoration: none;
    }

    .header a.active {
      color: #dd0031;
      font-weight: bold;
    }
  `,
})
export class HeaderComponent {}
