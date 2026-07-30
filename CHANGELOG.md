# Changelog

## 0.2.0 - 2026-07-30

- Zero-config `lenty-ssr` CLI and `runLentySsrProjectRender()` / `verifyLentySsrProjectOutput()` runner surface added; built html trees render into `dist-ssr` with automatic `.luis` source discovery via `@lentystyle/hybrid/site`.
- `htmlGuardMode` config field added ('ssr' strict script allowlist | 'hybrid' full-page scan); the runner defaults to 'hybrid' for built application pages.
- Project config gained `htmlDirName` (default 'dist'); `defaultRuntimeOptions` is now applied automatically by the runner.
- `payloadMode: 'external-json'` added to the project-level `ssr` block; the `lenty-ssr` runner writes `<route-token>.payload.json` under `assetBaseUrl` and references it from html instead of inlining JSON. Request-time `LentySsrConfig` always stays `'inline-json'`.
- Optional `<!-- lenty-ssr -->` html placeholder added; when present, generated tags replace it instead of falling back to `</head>`/prepend.
- `ssr.routes` config block added mapping route id patterns to `.luis` `sourceDirs`/`sources` for request-time rendering.
- `createLentySsrFromProjectConfig()` and `createLentySsrProdFromProjectConfig()` added; `renderRoute(routeId, html)` resolves configured sources with an mtime-based content cache, applies `defaultRuntimeOptions` automatically, and forwards the full prod cache `options` (`ttlMs`, `cacheStore`, `compileCache`, `maxEntries`) to the underlying integration.
- Unmatched routes, empty mappings, and unreadable source files reject with `project-config-invalid` carrying the route id.
- Production cache gained `ttlMs` expiry, `invalidate(routeId)`, `clear()`, and `stats()` (hit/miss/entry counts), plus a pluggable async `cacheStore` contract; the default in-memory store keeps prior recency/eviction behavior unchanged.
- Production SSR cache keys now include `htmlGuardMode` and no longer include the deprecated `adapter`/`rewritePolicy` fields.
- Shared, bounded `.luis` parse cache added (`LentySsrCompileCache`, `createLentySsrCompileCache()`, `getLentySsrCompileCacheStats()`), backed by hybrid's route-independent compile cache (now public via `@lentystyle/hybrid`), keyed by `.luis` source content hash. Per-route observed-rule matching against each request's html still always runs fresh, so the cache cannot cause stale or missing CSS.
- `createLentySsrProdIntegration()`, `createLentySsrProd()`, `createLentySsrFromProjectConfig()`, and `createLentySsrProdFromProjectConfig()` now auto-create and reuse a compile cache by default (opt out or share one explicitly via the `compileCache` option/param); `renderLentySsrRequest()`/`renderLentySsrAdapterRequest()` accept it as an optional trailing argument, defaulting to no caching for one-off direct calls.
- `LentySsrError` public error class added with stable codes `guard-rejected`, `compile-failed`, `adapter-callback-failed`, and `project-config-invalid`, plus the `isLentySsrError()` guard.
- `adapter` and `rewritePolicy` config fields are now ignored and resolve to fixed defaults; both will be removed from the type surface in a future minor.
- `scriptNonce` config field added; written only on the SSR bootstrap `<script src>` tag (never on the inline JSON payload script, which is never executable).
- SSR public changelog sync now reads package-root changelog dates before selecting phase records and skips release-prep entries from public topics.

## 0.1.0 - 2026-05-28

- Added shared project config loading for the `ssr` block inside `luis.config.mjs`.
- Connected SSR request rendering to strict shared guard validation before hybrid compilation.
- Added SSR-specific HTML mode so script validation stays strict for server-rendered payloads.
- Ensured standalone SSR type builds resolve guard distribution types without manual prebuild ordering.
