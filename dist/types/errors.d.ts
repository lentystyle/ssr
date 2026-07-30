export type LentySsrErrorCode = 'guard-rejected' | 'compile-failed' | 'adapter-callback-failed' | 'project-config-invalid';
export interface LentySsrErrorOptions {
    cause?: unknown;
    routeId?: string;
}
export declare class LentySsrError extends Error {
    readonly code: LentySsrErrorCode;
    readonly routeId: string | null;
    readonly cause: unknown;
    constructor(code: LentySsrErrorCode, message: string, options?: LentySsrErrorOptions);
}
export declare function isLentySsrError(value: unknown): value is LentySsrError;
