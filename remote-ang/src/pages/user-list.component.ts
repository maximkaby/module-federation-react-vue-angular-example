import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { users } from './users';

@Component({
  selector: 'app-remote-user-list',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div style="margin: 20px">
      <h2>Users</h2>
      <ul>
        @for (name of users; track name; let id = $index) {
          <li><a [routerLink]="['/users', id]">{{ name }}</a></li>
        }
      </ul>
    </div>
  `,
})
export class UserListComponent {
  protected readonly users = users;
}
