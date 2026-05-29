import type { LentySsrAdapterRenderInput, LentySsrAdapterRenderResult } from './adapter-types';
import type { LentySsrRequestInput, LentySsrRequestResult } from './request-types';
import type { ResolvedLentySsrConfig } from './types';
export interface LentySsrProdOptions {
    maxEntries?: number;
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
export interface LentySsrProdIntegration {
    kind: 'lenty-ssr-prod';
    config: ResolvedLentySsrConfig;
    renderRequest: (input: LentySsrRequestInput) => Promise<LentySsrProdRenderResult>;
    renderAdapter: <TContext>(input: LentySsrAdapterRenderInput<TContext>) => Promise<LentySsrProdAdapterRenderResult<TContext>>;
}
