import { defineConfig } from 'tsdown'

/*
 * Explicit tsdown config for a React component library.
 *
 * This deliberately does not use `defineBuildPlan` / `toTsdownConfigs` from
 * `@snailicid3/build-config`. Its plan has no browser runtime and no CSS
 * output, and its fixed `.mjs` / `.cjs` names never matched this package's
 * export map, so `./dist/index.js` did not exist.
 *
 * - ESM only: React 19 consumers are bundlers and ESM runtimes.
 * - `platform: 'neutral'`: components run in the browser, not Node.
 * - React stays external: tsdown never bundles `peerDependencies`.
 * - Component CSS imports are collected by `@tsdown/css` into
 *   `dist/style.css`, exported as `./style.css`.
 *
 * Revisit once the shared build plan covers a browser React library.
 */
export default defineConfig({
    clean: true,
    css: {
        fileName: 'style.css',
    },
    dts: true,
    entry: { index: './src/index.ts' },
    fixedExtension: false,
    format: ['esm'],
    outDir: './dist',
    platform: 'neutral',
    sourcemap: true,
})
