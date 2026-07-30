# @lentystyle/ssr

LentyStyle, sunucu tarafında render edilen HTML içine CSS ve runtime verisini enjekte edebilir. Observed aynı şekilde çalışmaya devam eder.

`.luis` kaynakları için istek anında SSR istiyorsanız bu paketi kullanın.

## Kurulum

### npm

```bash
pnpm add @lentystyle/ssr
```

## Hızlı Kullanım

En hızlı yol — siteni build et, ardından paketle gelen CLI'ı çıktı üzerinde çalıştır:

```bash
npx lenty-ssr
```

Config olmadan runner `./dist` dizinini okur, sayfa başına `.luis` kaynaklarını otomatik keşfeder ve SSR ile zenginleştirilmiş sayfaları `./dist-ssr` içine yazar. Önizleme için `--dry-run`, çıktı kontrolü için `--verify` kullanın.

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

Request-time SSR için route'ları config içinde `.luis` kaynaklarına eşleyin ve üç satırla render edin:

```ts
import { createLentySsrProdFromProjectConfig } from '@lentystyle/ssr'

const ssr = await createLentySsrProdFromProjectConfig()
const render = await ssr.renderRoute(req.path, html)
res.send(render.result.html)
```

Tipik istek akışı:

1. route HTML'i çözülür
2. `.luis` kaynak listesi çözülür
3. `@lentystyle/core/guard/ssr` ile güvenlik doğrulaması çalışır
4. hybrid ile derlenir
5. CSS ve payload HTML'e enjekte edilir
6. `result.html` döndürülür

## Hatalar

Her başarısızlık, kodlu bir `LentySsrError` ile reject olur:

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

## Linkler

- Dokümantasyon: https://lentystyle.com/tr/docs/ssr/overview
- Site: https://lentystyle.com/
