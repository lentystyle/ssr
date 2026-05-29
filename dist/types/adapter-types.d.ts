import type { LentySsrRequestResult, LentySsrRequestSourceInput } from './request-types';
import type { ResolvedLentySsrConfig } from './types';
export interface LentySsrAdapterContract<TContext = unknown> {
    resolveRouteId: (context: TContext) => string;
    renderHtml: (context: TContext) => Promise<string> | string;
    resolveSources: (context: TContext) => Promise<LentySsrRequestSourceInput[]> | LentySsrRequestSourceInput[];
    finalizeHtml?: (result: LentySsrRequestResult, context: TContext) => Promise<string> | string;
}
export interface LentySsrAdapterRenderInput<TContext = unknown> {
    adapter: LentySsrAdapterContract<TContext>;
    context: TContext;
}
export interface LentySsrAdapterRenderResult<TContext = unknown> {
    routeId: string;
    html: string;
    result: LentySsrRequestResult;
    context: TContext;
}
export interface LentySsrAdapterIntegration<TContext = unknown> {
    kind: 'lenty-ssr-adapter';
    config: ResolvedLentySsrConfig;
    render: (input: LentySsrAdapterRenderInput<TContext>) => Promise<LentySsrAdapterRenderResult<TContext>>;
}
