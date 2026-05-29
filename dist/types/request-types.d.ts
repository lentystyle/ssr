import type { HybridBundleSourceInput, HybridRuntimeRoutePayload } from '@lentystyle/hybrid';
import type { LentySsrHtmlArtifactRefs } from './output-types';
import type { LentySsrRuntimeOptionsInput } from './types';
export interface LentySsrRequestSourceInput extends Omit<HybridBundleSourceInput, 'runtimeOptions'> {
    runtimeOptions?: LentySsrRuntimeOptionsInput;
}
export interface LentySsrRequestInput {
    routeId: string;
    html: string;
    sources: LentySsrRequestSourceInput[];
}
export interface LentySsrRequestResult {
    routeId: string;
    html: string;
    css: string;
    artifacts: LentySsrHtmlArtifactRefs;
    runtimePayload: HybridRuntimeRoutePayload;
    metrics: {
        compileDurationMs: number;
        evaluateDurationMs: number;
    };
    warnings: {
        code: string;
        message: string;
        line: number;
    }[];
}
