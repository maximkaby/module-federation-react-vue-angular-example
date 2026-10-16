import { provideZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { provideAppRouter } from './routes';

/**
 * Bootstraps the remote Angular app inside `el` and resolves with the function
 * that tears it down. The host owns that function and calls it on cleanup.
 *
 * `bootstrapApplication` looks up the component's selector in the DOM, so the
 * host element gets one created for it.
 *
 * Change detection is zoneless: the components drive updates with signals, and
 * importing `zone.js` here would patch the globals of whatever host loads us.
 *
 * `basename` is the URL prefix the host mounts this remote under; every route
 * and link of the remote resolves below it.
 */
export const mount = async (el: Element, basename = '/'): Promise<() => void> => {
  const root = el.ownerDocument.createElement('app-remote-root');
  el.appendChild(root);

  const appRef = await bootstrapApplication(AppComponent, {
    providers: [provideZonelessChangeDetection(), provideAppRouter(basename)],
  });

  return () => {
    appRef.destroy();
    root.remove();
  };
};
