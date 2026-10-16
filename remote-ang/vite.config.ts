import type { Plugin, PluginOption, UserConfig } from 'vite';

import angular from '@analogjs/vite-plugin-angular';
import { defineConfig } from 'vite';
import { federation } from '@module-federation/vite';

/** MF sets optimizeDeps.force=true; that re-runs prebundling every dev start and causes 504 Outdated Optimize Dep races (see module-federation/vite#376). */
function clearOptimizeDepsForce(): PluginOption {
  return {
    name: 'clear-mf-optimize-deps-force',
    enforce: 'post',
    config: () => ({
      optimizeDeps: { force: false },
    }),
  };
}

/**
 * The Angular plugin compiles the whole project in `buildStart` and serves the
 * result from `transform`, returning empty code for files it has not compiled
 * yet. MF emits remoteEntry and the exposes as chunks from its own `buildStart`,
 * and Rollup starts loading those right away, so `exposes.ts` could be
 * transformed mid-compilation and the remote shipped an empty bundle. Running
 * Angular's `buildStart` first and to completion closes that race.
 */
function compileAngularFirst(plugins: Plugin[]): Plugin[] {
  return plugins.map((plugin) => {
    const hook = plugin.buildStart;
    if (!hook) return plugin;

    const handler = typeof hook === 'function' ? hook : hook.handler;
    return { ...plugin, buildStart: { order: 'pre', sequential: true, handler } };
  });
}

// https://vitejs.dev/config/
export default defineConfig(
  (): UserConfig => ({
    build: {
      target: 'chrome89',
    },
    resolve: {
      mainFields: ['module'],
      dedupe: ['@angular/core'],
    },
    plugins: [
      federation({
        filename: 'remoteEntry.js',
        name: 'remoteAng',
        exposes: {
          './remote-app-ang': './src/exposes.ts',
        },
        remotes: {},
        shared: ['@angular/core'],
        dts: false,
      }) as unknown as PluginOption,
      compileAngularFirst(angular()) as unknown as PluginOption,
      clearOptimizeDepsForce(),
    ],
  }),
);