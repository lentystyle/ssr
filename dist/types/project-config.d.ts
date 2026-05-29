import type { LuisSsrProjectConfigInput, LuisSsrProjectConfigOverrides, ResolvedLuisSsrProjectConfig } from './project-types';
export declare function loadLuisSsrProjectConfig(configOrPath?: LuisSsrProjectConfigInput, overrides?: LuisSsrProjectConfigOverrides): Promise<ResolvedLuisSsrProjectConfig>;
export declare function shouldProcessLuisSsrProjectHtmlFile(htmlFilePath: string, config: ResolvedLuisSsrProjectConfig): boolean;
