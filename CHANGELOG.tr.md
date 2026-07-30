# Değişiklik Geçmişi

## 0.2.0 - 2026-07-30

- Sıfır-config `lenty-ssr` CLI'ı ve `runLentySsrProjectRender()` / `verifyLentySsrProjectOutput()` runner yüzeyi eklendi; build edilmiş html ağaçları, `@lentystyle/hybrid/site` üzerinden otomatik `.luis` source keşfiyle `dist-ssr` içine render ediliyor.
- `htmlGuardMode` config alanı eklendi ('ssr' strict script allowlist | 'hybrid' tam sayfa tarama); runner, build edilmiş uygulama sayfaları için varsayılan olarak 'hybrid' kullanıyor.
- Proje config'ine `htmlDirName` eklendi (varsayılan 'dist'); `defaultRuntimeOptions` artık runner tarafından otomatik uygulanıyor.
- Proje seviyesindeki `ssr` bloğuna `payloadMode: 'external-json'` eklendi; `lenty-ssr` runner her route için `<route-token>.payload.json` dosyasını `assetBaseUrl` altına yazıyor ve html'den JSON'u inline etmek yerine bu dosyaya referans veriyor. Request-time `LentySsrConfig` her zaman `'inline-json'` olarak kalıyor.
- Opsiyonel `<!-- lenty-ssr -->` html placeholder'ı eklendi; mevcut olduğunda, üretilen tag'ler `</head>`/prepend fallback'ine düşmek yerine bu placeholder'ın yerine yazılıyor.
- Route id pattern'lerini `.luis` `sourceDirs`/`sources`'a eşleyen `ssr.routes` config bloğu request-time render için eklendi.
- `createLentySsrFromProjectConfig()` ve `createLentySsrProdFromProjectConfig()` eklendi; `renderRoute(routeId, html)` yapılandırılmış source'ları mtime tabanlı bir içerik cache'iyle çözüyor, `defaultRuntimeOptions`'ı otomatik uyguluyor ve prod cache `options` nesnesinin tamamını (`ttlMs`, `cacheStore`, `compileCache`, `maxEntries`) alttaki integration'a iletiyor.
- Eşleşmeyen route'lar, boş eşlemeler ve okunamayan source dosyaları, route id'yi taşıyan `project-config-invalid` ile reject oluyor.
- Production cache'e `ttlMs` expiry, `invalidate(routeId)`, `clear()` ve `stats()` (hit/miss/entry sayıları) eklendi, ayrıca pluggable async `cacheStore` contract'ı eklendi; varsayılan in-memory store önceki recency/eviction davranışını değiştirmeden koruyor.
- Production SSR cache key'leri artık `htmlGuardMode`'u içeriyor ve deprecated `adapter`/`rewritePolicy` alanlarını artık içermiyor.
- Paylaşılan, sınırlı (bounded) `.luis` parse cache'i eklendi (`LentySsrCompileCache`, `createLentySsrCompileCache()`, `getLentySsrCompileCacheStats()`); hybrid'in route'tan bağımsız compile cache'ini (artık `@lentystyle/hybrid` üzerinden public) `.luis` source içerik hash'ine göre anahtarlayarak birçok render çağrısı arasında yeniden kullanıyor. Her route'a özel observed-rule eşleştirmesi her request'in html'ine karşı hâlâ her zaman taze çalışıyor, bu yüzden cache asla eski veya eksik CSS'e yol açamaz.
- `createLentySsrProdIntegration()`, `createLentySsrProd()`, `createLentySsrFromProjectConfig()` ve `createLentySsrProdFromProjectConfig()` artık varsayılan olarak bir compile cache'i otomatik oluşturup yeniden kullanıyor (yeni `compileCache` option/param ile devre dışı bırakılabilir veya açıkça paylaşılabilir); `renderLentySsrRequest()`/`renderLentySsrAdapterRequest()` bunu opsiyonel bir sondaki argüman olarak kabul ediyor, tek seferlik direct çağrılar için varsayılan olarak cache'siz kalıyor.
- Sabit kodlu `guard-rejected`, `compile-failed`, `adapter-callback-failed` ve `project-config-invalid` kodlarına sahip public `LentySsrError` hata sınıfı eklendi, ayrıca `isLentySsrError()` guard'ı eklendi.
- `adapter` ve `rewritePolicy` config alanları artık ignore ediliyor ve sabit varsayılanlara resolve oluyor; ikisi de ileride tip yüzeyinden kaldırılacak.
- `scriptNonce` config alanı eklendi; yalnızca SSR bootstrap `<script src>` tag'ine yazılıyor (hiçbir zaman çalıştırılabilir olmayan inline JSON payload script'ine yazılmıyor).
- SSR public changelog senkronizasyonu artık phase kayıtlarını seçmeden önce paket-kökü changelog tarihlerini okuyor ve release-prep girdilerini public topic'lerden atlıyor.

## 0.1.0 - 2026-05-28

- `luis.config.mjs` içindeki `ssr` bloğu için paylaşılan proje config yükleme desteği eklendi.
- SSR request render akışı hybrid derleme öncesinde strict ortak guard doğrulamasına bağlandı.
- Server-render payload'ları için script doğrulamasının strict kalmasını sağlayan SSR'a özel HTML modu eklendi.
- Standalone SSR type build akışlarının manuel prebuild sırası olmadan guard dağıtım tiplerini çözebilmesi sağlandı.
