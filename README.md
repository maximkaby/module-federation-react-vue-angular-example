# Module Federation: React host with React, Vue and Angular remotes

A React host that loads four remote apps at runtime with Module Federation 2
([`@module-federation/vite`](https://github.com/module-federation/vite)):
two React remotes, a Vue remote and an Angular remote. All of them live on
the same page and share the URL: the host menu switches sections without a
page reload.

## Packages

| Package         | Framework   | Port | Route in the host |
| --------------- | ----------- | ---- | ----------------- |
| `host`          | React 19    | 4173 | `/`               |
| `remote-react1` | React 19    | 4174 | `/remote`         |
| `remote-vue`    | Vue 3       | 4175 | `/remote-vue`     |
| `remote-react2` | React 19    | 4176 | `/remote-react`   |
| `remote-ang`    | Angular 20  | 4177 | `/remote-ang`     |

The host expects every remote at its port above (`remotes` in
`host/vite.config.ts`), so all five servers have to run at once.

## Requirements

- Node.js 22.12+ (Vite 7 in `remote-ang` refuses older versions)
- pnpm 9

## Getting started

From this directory:

```sh
pnpm install:deps   # install dependencies and build every package
pnpm preview        # build and serve all packages
```

Open http://localhost:4173/.

## Scripts

| Command             | What it does                                         |
| ------------------- | ---------------------------------------------------- |
| `pnpm install:deps` | Installs dependencies, then builds every package     |
| `pnpm dev`          | Starts every package's Vite dev server in parallel   |
| `pnpm build`        | Builds every package                                 |
| `pnpm preview`      | Builds every package and serves the production build |

Each root script runs the same-named script in every workspace package
(`pnpm --filter './*'`).

## License

[ISC](LICENSE). Parts of the code come from
[module-federation-examples](https://github.com/module-federation/module-federation-examples)
(MIT).
