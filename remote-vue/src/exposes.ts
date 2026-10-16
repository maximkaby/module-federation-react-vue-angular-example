import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import { createAppRouter } from './router';

/**
 * Mounts the remote Vue app into `el` and returns the function that tears it down.
 * The host owns the returned function and calls it on cleanup.
 *
 * Pinia must be installed here as well as in `main.ts`: this is the entry the
 * host loads, and `Counter.vue` resolves its store during setup.
 *
 * `basename` is the URL prefix the host mounts this remote under; every route
 * and link of the remote resolves below it.
 */
export const mount = (el: Element | string, basename = '/'): (() => void) => {
  const router = createAppRouter(basename);
  const app = createApp(App);
  app.use(createPinia());
  app.use(router);
  app.mount(el);
  return () => {
    app.unmount();
    // Drops the router's `popstate` listener, which outlives `app.unmount()`.
    router.options.history.destroy();
  };
};
