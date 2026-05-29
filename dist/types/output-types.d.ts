export type LentySsrPayloadMode = 'inline-json';
export interface LentySsrOutputConfig {
    globalCssHref: string | null;
    bootstrapScriptSrc: string | null;
    styleNonce: string | null;
    payloadMode: LentySsrPayloadMode;
}
export interface LentySsrHtmlArtifactRefs {
    globalCssHref: string | null;
    styleTagId: string | null;
    styleNonce: string | null;
    payloadScriptId: string;
    bootstrapScriptSrc: string | null;
    payloadMode: LentySsrPayloadMode;
}
