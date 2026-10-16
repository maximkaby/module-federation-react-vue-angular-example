import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { users } from './users';

@Component({
  selector: 'app-remote-user-details',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div style="margin: 20px">
      <h2>{{ name() ?? 'Unknown user' }}</h2>
      <a routerLink="/users">Back to users</a>
    </div>
  `,
})
export class UserDetailsComponent {
  /** Bound from the `:id` route param via `withComponentInputBinding()`. */
  readonly id = input<string>();

  protected readonly name = computed(() => users[Number(this.id())]);
}
