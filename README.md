# @lentystyle/ssr

LentyStyle can inject CSS and runtime payload into server-rendered HTML. Observed selectors continue to work as usual.

Use this package when you want request-time SSR for `.luis` sources.

## Install

### npm

```bash
pnpm add @lentystyle/ssr
```

## Quick Usage

Fastest path — build your site, then run the bundled CLI over the output:

```bash
npx lenty-ssr
```

With no config the runner reads `./dist`, auto-discovers `.luis` sources per page, and writes the SSR-enriched pages into `./dist-ssr`. Use `--dry-run` to preview and `--verify` to check the output.

Keep project-level SSR settings in `luis.config.mjs`:

```js
import { defineLuisConfig } from '@lentystyle/core'

export default defineLuisConfig({
  ssr: {
    mode: 'ssr',
    outDirName: 'dist-ssr',
    defaultRuntimeOptions: '',
  },
})
```

For request-time SSR, map routes to `.luis` sources in the config and render with three lines:

```ts
import { createLentySsrProdFromProjectConfig } from '@lentystyle/ssr'

const ssr = await createLentySsrProdFromProjectConfig()
const render = await ssr.renderRoute(req.path, html)
res.send(render.result.html)
```

Typical request flow:

1. resolve route HTML
2. resolve `.luis` source list
3. run security validation through `@lentystyle/core/guard/ssr`
4. compile with hybrid bundle orchestration
5. inject CSS and payload into HTML
6. return `result.html`

## Errors

Every failure rejects with a coded `LentySsrError`:

```ts
import { isLentySsrError } from '@lentystyle/ssr'

try {
  await integration.renderRequest(input)
} catch (error) {
  if (isLentySsrError(error)) {
    console.log(error.code) // 'guard-rejected' | 'compile-failed' | 'adapter-callback-failed' | 'project-config-invalid'
  }
}
```

## Links

- Docs: [lentystyle.com/en/docs/ssr/overview](https://lentystyle.com/en/docs/ssr/overview)
- Site: [lentystyle.com](https://lentystyle.com/)
