import type { LentySsrOutputConfig } from './output-types';
import type { LentySsrRequestInput, LentySsrRequestResult } from './request-types';
export type LentySsrMode = 'static' | 'ssr';
export type LentySsrHtmlGuardMode = 'ssr' | 'hybrid';
/** @deprecated Deprecated in 0.2.0: framework adapter labels never selected an implementation; the field is ignored and will be removed in the next minor. */
export type LentySsrAdapter = 'none' | 'vue' | 'svelte' | 'react' | 'astro';
/** @deprecated Deprecated in 0.2.0: rewrite policy never branched render behavior; the field is ignored and will be removed in the next minor. */
export type LentySsrRewritePolicy = 'auto' | 'prefer-static' | 'prefer-runtime';
export type LentySsrRequestedFeature = 'debug' | 'performance' | 'map' | 'lazy' | 'worker';
export type LentySsrRuntimeWorkerMode = 'auto' | 'main' | 'worker';
export type LentySsrRuntimeOptions = {
    debug: boolean;
    performance: boolean;
    map: boolean;
    lazy: boolean;
    worker: LentySsrRuntimeWorkerMode;
};
export type LentySsrRuntimeOptionsInput = string | Partial<LentySsrRuntimeOptions>;
export interface LentySsrConfig {
    mode?: LentySsrMode;
    htmlGuardMode?: LentySsrHtmlGuardMode;
    /** @deprecated Deprecated in 0.2.0 and ignored: no framework adapter implementation exists; resolve always yields 'none'. */
    adapter?: LentySsrAdapter;
    performance?: boolean;
    debug?: boolean;
    map?: boolean;
    lazy?: boolean;
    worker?: LentySsrRuntimeWorkerMode;
    assetBaseUrl?: string;
    globalCssHref?: string;
    bootstrapScriptSrc?: string;
    styleNonce?: string;
    scriptNonce?: string;
    runtimeOptions?: LentySsrRuntimeOptionsInput;
    /** @deprecated Deprecated in 0.2.0 and ignored: no render branch reads it; resolve always yields 'auto'. */
    rewritePolicy?: LentySsrRewritePolicy;
}
export interface ResolvedLentySsrConfig {
    mode: LentySsrMode;
    htmlGuardMode: LentySsrHtmlGuardMode;
    /** @deprecated Always 'none'; kept only for type compatibility until the next minor. */
    adapter: LentySsrAdapter;
    performance: boolean;
    debug: boolean;
    map: boolean;
    lazy: boolean;
    worker: LentySsrRuntimeWorkerMode;
    assetBaseUrl: string;
    output: LentySsrOutputConfig;
    runtimeOptions: LentySsrRuntimeOptions;
    requestedFeatures: LentySsrRequestedFeature[];
    /** @deprecated Always 'auto'; kept only for type compatibility until the next minor. */
    rewritePolicy: LentySsrRewritePolicy;
}
export interface LentySsrIntegration {
    kind: 'lenty-ssr';
    config: ResolvedLentySsrConfig;
    renderRequest: (input: LentySsrRequestInput) => Promise<LentySsrRequestResult>;
}
