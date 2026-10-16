import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { dependencies } from './package.json';

export default defineConfig(() => ({
  server: { fs: { allow: ['.', '../shared'] } },
  build: {
    target: 'chrome89',
  },
  plugins: [
    federation({
      name: 'host',
      remotes: {
        remote: {
          type: 'module',
          name: 'remote',
          entry: 'http://localhost:4174/remoteEntry.js',
          entryGlobalName: 'remote',
          shareScope: 'default',
        },
        remoteVue: {
          type: 'module',
          name: 'remoteVue',
          entry: 'http://localhost:4175/remoteEntry.js',
          entryGlobalName: 'remoteVue',
          shareScope: 'default',
        },
        remoteReact: {
          type: 'module',
          name: 'remoteReact',
          entry: 'http://localhost:4176/remoteEntry.js',
          entryGlobalName: 'remoteReact',
          shareScope: 'default',
        },
        remoteAng: {
          type: 'module',
          name: 'remoteAng',
          entry: 'http://localhost:4177/remoteEntry.js',
          entryGlobalName: 'remoteAng',
          shareScope: 'default',
        },
      },
      exposes: {},
      filename: 'remoteEntry.js',
      shared: {
        react: {
          requiredVersion: dependencies.react,
          singleton: true,
        },
      },
    }),
    react(),
  ],
}));
