import type { LuisConfig } from '@lentystyle/core/config';
import type { LentySsrConfig, ResolvedLentySsrConfig } from './types';
export type LuisSsrProjectConfigInput = LuisSsrProjectConfig | LuisConfig | string;
export interface LuisSsrProjectConfig extends LentySsrConfig {
    outDirName?: string;
    maxEntries?: number;
    defaultRuntimeOptions?: string;
    include?: string[];
    exclude?: string[];
}
export interface LuisSsrProjectConfigOverrides {
    cwd?: string;
}
export interface ResolvedLuisSsrProjectConfig extends ResolvedLentySsrConfig {
    configPath: string | null;
    configDir: string;
    outDirName: string;
    outDir: string;
    maxEntries: number;
    defaultRuntimeOptions: string;
    include: string[];
    exclude: string[];
}
