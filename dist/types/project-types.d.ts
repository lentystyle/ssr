import type { LuisConfig } from '@lentystyle/core/config';
import type { LentySsrCompileCache } from './compile-cache';
import type { LentySsrPayloadMode } from './output-types';
import type { LentySsrRequestInput, LentySsrRequestResult, LentySsrRequestSourceInput } from './request-types';
import type { LentySsrProdRenderResult } from './prod-types';
import type { LentySsrConfig, ResolvedLentySsrConfig } from './types';
export interface LuisSsrProjectRouteSourcesConfig {
    match: string | string[];
    sourceDirs?: string[];
    sources?: string[];
}
export interface ResolvedLuisSsrProjectRouteSources {
    match: string[];
    sourceDirs: string[];
    sources: string[];
}
export type LuisSsrProjectConfigInput = LuisSsrProjectConfig | LuisConfig | string;
export interface LuisSsrProjectConfig extends LentySsrConfig {
    htmlDirName?: string;
    outDirName?: string;
    maxEntries?: number;
    defaultRuntimeOptions?: string;
    include?: string[];
    exclude?: string[];
    routes?: LuisSsrProjectRouteSourcesConfig[];
    payloadMode?: LentySsrPayloadMode;
}
export interface LuisSsrProjectConfigOverrides {
    cwd?: string;
}
export interface ResolvedLuisSsrProjectConfig extends ResolvedLentySsrConfig {
    configPath: string | null;
    configDir: string;
    htmlDirName: string;
    htmlDir: string;
    outDirName: string;
    outDir: string;
    maxEntries: number;
    defaultRuntimeOptions: string;
    include: string[];
    exclude: string[];
    routes: ResolvedLuisSsrProjectRouteSources[];
}
export interface LentySsrRenderRouteOverrides {
    extraSources?: LentySsrRequestSourceInput[];
}
export interface LentySsrProjectIntegrationOptions {
    compileCache?: LentySsrCompileCache;
}
export interface LentySsrProjectIntegration {
    kind: 'lenty-ssr-project';
    config: ResolvedLuisSsrProjectConfig;
    renderRoute: (routeId: string, html: string, overrides?: LentySsrRenderRouteOverrides) => Promise<LentySsrRequestResult>;
    resolveRequest: (routeId: string, html: string, overrides?: LentySsrRenderRouteOverrides) => Promise<LentySsrRequestInput>;
}
export interface LentySsrProjectProdIntegration {
    kind: 'lenty-ssr-project-prod';
    config: ResolvedLuisSsrProjectConfig;
    renderRoute: (routeId: string, html: string, overrides?: LentySsrRenderRouteOverrides) => Promise<LentySsrProdRenderResult>;
}
