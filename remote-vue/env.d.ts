/// <reference types="vite/client" />

// The Module Federation DTS plugin compiles the exposed modules with plain `tsc`,
// which cannot resolve SFCs. This shim lets that build resolve `*.vue` imports;
// `vue-tsc` keeps resolving the real components, so local type-checking is unaffected.
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
