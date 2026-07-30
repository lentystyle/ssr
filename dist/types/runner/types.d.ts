import type { ResolvedLuisSsrProjectConfig } from '../project-types';
export interface LentySsrRunnerOptions {
    cwd?: string;
    configPath?: string;
    htmlDir?: string;
    outDir?: string;
    inPlace?: boolean;
    dryRun?: boolean;
}
export interface LentySsrRunnerRouteResult {
    routeId: string;
    htmlFilePath: string;
    sourceCount: number;
    cacheHit: boolean;
}
export interface LentySsrRunnerResult {
    config: ResolvedLuisSsrProjectConfig;
    htmlDir: string;
    outDir: string;
    dryRun: boolean;
    processed: LentySsrRunnerRouteResult[];
    skipped: string[];
}
export interface LentySsrVerifyOptions {
    cwd?: string;
    configPath?: string;
    outDir?: string;
    expectRoutes?: string[];
}
export interface LentySsrVerifyRouteCheck {
    routeId: string;
    hasPayload: boolean;
    hasStyle: boolean;
}
export interface LentySsrVerifyResult {
    outDir: string;
    payloadFileCount: number;
    routes: LentySsrVerifyRouteCheck[];
    ok: boolean;
}
