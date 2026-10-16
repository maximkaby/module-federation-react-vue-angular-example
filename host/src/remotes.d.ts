// Mirrors remote-vue's generated `@mf-types/compiled-types/src/exposes.d.ts`.
// Declared locally because the host's federated type download is not wired up
// (the React remotes work around the same gap with `// @ts-ignore`).
declare module 'remoteVue/remote-app-vue' {
  /** Mounts the remote Vue app into `el` under the `basename` URL prefix; returns its teardown. */
  export const mount: (el: Element | string, basename?: string) => () => void;
}

declare module 'remoteAng/remote-app-ang' {
  /** Bootstraps the remote Angular app inside `el` under the `basename` URL prefix; resolves with its teardown. */
  export const mount: (el: Element, basename?: string) => Promise<() => void>;
}
