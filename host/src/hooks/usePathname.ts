import { MouseEvent, useSyncExternalStore } from 'react';
import { flushSync } from 'react-dom';

const hostListeners = new Set<() => void>();

const subscribe = (listener: () => void) => {
  hostListeners.add(listener);
  window.addEventListener('popstate', listener);

  return () => {
    hostListeners.delete(listener);
    window.removeEventListener('popstate', listener);
  };
};

const getPathname = () => window.location.pathname;

/** The current URL path, kept in sync with host navigation and Back/Forward. */
export const usePathname = () => useSyncExternalStore(subscribe, getPathname);

// Every router on the page (react-router, vue-router, Angular Router) listens
// to `popstate`, while `pushState` itself emits nothing. Pushing the URL and
// firing `popstate` by hand lets each remote's router react without a reload.
export const navigate = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
  // Leave cmd/ctrl/shift/middle clicks to the browser (new tab, new window).
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    return;
  }

  event.preventDefault();

  if (window.location.pathname === href) {
    return;
  }

  window.history.pushState(null, '', href);

  // Re-render the host first, synchronously, so remotes mounted only on the
  // section being left are torn down along with their routers. Otherwise they
  // would also receive the `popstate` below and rewrite a URL outside their
  // prefix (vue-router replaces a stateless entry with `base + path`).
  flushSync(() => hostListeners.forEach((listener) => listener()));

  window.dispatchEvent(new PopStateEvent('popstate'));
};
