# Değişiklik Geçmişi

## 0.1.0 - 2026-05-28

- `luis.config.mjs` içindeki `ssr` bloğu için ortak proje config yükleme desteği eklendi.
- SSR request render akışı hybrid derleme öncesinde strict ortak guard doğrulamasına bağlandı.
- Server-render payloadları için script doğrulaması strict kalacak şekilde SSR odaklı HTML modu eklendi.
- Standalone SSR type build akışları manuel prebuild sırası olmadan guard dist tiplerini çözebilir hale getirildi.
