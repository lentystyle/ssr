# Changelog

## 0.1.0 - 2026-05-28

- Added shared project config loading for the `ssr` block inside `luis.config.mjs`.
- Connected SSR request rendering to strict shared guard validation before hybrid compilation.
- Added SSR-specific HTML mode so script validation stays strict for server-rendered payloads.
- Ensured standalone SSR type builds resolve guard distribution types without manual prebuild ordering.
