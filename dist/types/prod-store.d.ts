export interface LentySsrCacheStoreEntry<TValue> {
    value: TValue;
    expiresAt: number | null;
}
export interface LentySsrCacheStore<TValue> {
    get: (key: string) => Promise<LentySsrCacheStoreEntry<TValue> | undefined>;
    set: (key: string, entry: LentySsrCacheStoreEntry<TValue>) => Promise<void>;
    delete: (key: string) => Promise<void>;
    clear: () => Promise<void>;
    keys?: () => Promise<string[]>;
}
export declare function createLentySsrMemoryCacheStore<TValue>(): LentySsrCacheStore<TValue>;
