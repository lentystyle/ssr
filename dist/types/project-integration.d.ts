import type { LentySsrProdOptions } from './prod-types';
import type { LentySsrProjectIntegration, LentySsrProjectIntegrationOptions, LentySsrProjectProdIntegration, LuisSsrProjectConfigInput, LuisSsrProjectConfigOverrides } from './project-types';
export declare function createLentySsrFromProjectConfig(configOrPath?: LuisSsrProjectConfigInput, overrides?: LuisSsrProjectConfigOverrides, options?: LentySsrProjectIntegrationOptions): Promise<LentySsrProjectIntegration>;
export declare function createLentySsrProdFromProjectConfig(configOrPath?: LuisSsrProjectConfigInput, overrides?: LuisSsrProjectConfigOverrides, options?: LentySsrProdOptions): Promise<LentySsrProjectProdIntegration>;
