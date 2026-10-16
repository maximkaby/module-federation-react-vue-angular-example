import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { provideAppRouter } from './routes';

bootstrapApplication(AppComponent, { providers: [provideAppRouter('/')] });
