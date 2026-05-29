# @lentystyle/ssr

LentyStyle can inject CSS and runtime payload into server-rendered HTML. Observed selectors continue to work as usual.

Use this package when you want request-time SSR for `.luis` sources.

## Install

### npm

```bash
pnpm add @lentystyle/ssr
```

## Quick Usage

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

Create the runtime integration:

```ts
import { createLentySsrIntegration } from '@lentystyle/ssr'

const integration = createLentySsrIntegration({ mode: 'ssr' })
```

Typical request flow:

1. resolve route HTML
2. resolve `.luis` source list
3. run security validation through `@lentystyle/core/guard/ssr`
4. compile with hybrid bundle orchestration
5. inject CSS and payload into HTML
6. return `result.html`

## Links

- Docs: [lentystyle.com/en/docs/ssr/overview](https://lentystyle.com/en/docs/ssr/overview)
- Site: [lentystyle.com](https://lentystyle.com/)
