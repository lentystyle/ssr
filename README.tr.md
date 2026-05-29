# @lentystyle/ssr

LentyStyle, sunucu tarafında render edilen HTML içine CSS ve runtime verisini enjekte edebilir. Observed aynı şekilde çalışmaya devam eder.

`.luis` kaynakları için istek anında SSR istiyorsanız bu paketi kullanın.

## Kurulum

### npm

```bash
pnpm add @lentystyle/ssr
```

## Hızlı Kullanım

Proje seviyesindeki SSR ayarlarını `luis.config.mjs` dosyasında tutun:

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

Runtime entegrasyonunu oluşturun:

```ts
import { createLentySsrIntegration } from '@lentystyle/ssr'

const integration = createLentySsrIntegration({ mode: 'ssr' })
```

Tipik istek akışı:

1. route HTML'i çözülür
2. `.luis` kaynak listesi çözülür
3. `@lentystyle/core/guard/ssr` ile güvenlik doğrulaması çalışır
4. hybrid ile derlenir
5. CSS ve payload HTML'e enjekte edilir
6. `result.html` döndürülür

## Linkler

- Dokümantasyon: https://lentystyle.com/tr/docs/ssr/overview
- Site: https://lentystyle.com/
