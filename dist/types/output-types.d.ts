export type LentySsrPayloadMode = 'inline-json' | 'external-json';
export interface LentySsrOutputConfig {
    globalCssHref: string | null;
    bootstrapScriptSrc: string | null;
    styleNonce: string | null;
    scriptNonce: string | null;
    payloadMode: LentySsrPayloadMode;
}
export interface LentySsrHtmlArtifactRefs {
    globalCssHref: string | null;
    styleTagId: string | null;
    styleNonce: string | null;
    payloadScriptId: string;
    payloadHref: string | null;
    bootstrapScriptSrc: string | null;
    scriptNonce: string | null;
    payloadMode: LentySsrPayloadMode;
}
