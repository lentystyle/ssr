import type { LentySsrAdapterRenderInput, LentySsrAdapterRenderResult } from './adapter-types';
import type { LentySsrCompileCache } from './compile-cache';
import type { LentySsrCacheStore } from './prod-store';
import type { LentySsrRequestInput, LentySsrRequestResult } from './request-types';
import type { ResolvedLentySsrConfig } from './types';
export interface LentySsrProdOptions {
    maxEntries?: number;
    ttlMs?: number;
    cacheStore?: LentySsrCacheStore<LentySsrProdRenderResult>;
    compileCache?: LentySsrCompileCache;
}
export interface LentySsrProdRenderResult {
    cacheHit: boolean;
    cacheKey: string;
    result: LentySsrRequestResult;
}
export interface LentySsrProdAdapterRenderResult<TContext = unknown> {
    cacheHit: boolean;
    cacheKey: string;
    result: LentySsrAdapterRenderResult<TContext>;
}
export interface LentySsrProdCacheStats {
    hitCount: number;
    missCount: number;
    entryCount: number | null;
}
export interface LentySsrProdIntegration {
    kind: 'lenty-ssr-prod';
    config: ResolvedLentySsrConfig;
    renderRequest: (input: LentySsrRequestInput) => Promise<LentySsrProdRenderResult>;
    renderAdapter: <TContext>(input: LentySsrAdapterRenderInput<TContext>) => Promise<LentySsrProdAdapterRenderResult<TContext>>;
    invalidate: (routeId: string) => Promise<void>;
    clear: () => Promise<void>;
    stats: () => Promise<LentySsrProdCacheStats>;
}
