import type { LentySsrOutputConfig } from './output-types';
import type { LentySsrRequestInput, LentySsrRequestResult } from './request-types';
export type LentySsrMode = 'static' | 'ssr';
export type LentySsrAdapter = 'none' | 'vue' | 'svelte' | 'react' | 'astro';
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
    runtimeOptions?: LentySsrRuntimeOptionsInput;
    rewritePolicy?: LentySsrRewritePolicy;
}
export interface ResolvedLentySsrConfig {
    mode: LentySsrMode;
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
    rewritePolicy: LentySsrRewritePolicy;
}
export interface LentySsrIntegration {
    kind: 'lenty-ssr';
    config: ResolvedLentySsrConfig;
    renderRequest: (input: LentySsrRequestInput) => Promise<LentySsrRequestResult>;
}
