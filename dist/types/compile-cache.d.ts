export interface LentySsrCompileCacheOptions {
    maxEntries?: number;
}
export interface LentySsrCompileCache {
}
export declare function createLentySsrCompileCache(options?: LentySsrCompileCacheOptions): LentySsrCompileCache;
export interface LentySsrCompileCacheStats {
    entryCount: number;
    maxEntries: number;
}
export declare function getLentySsrCompileCacheStats(cache: LentySsrCompileCache): LentySsrCompileCacheStats;
