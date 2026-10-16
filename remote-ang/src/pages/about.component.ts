import { Component } from '@angular/core';

@Component({
  selector: 'app-remote-about',
  standalone: true,
  template: `
    <div style="margin: 20px">
      <h2>About</h2>
      <p>Remote page rendered by the Angular remote's own router.</p>
    </div>
  `,
})
export class AboutComponent {}
