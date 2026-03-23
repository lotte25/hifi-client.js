// Copied from monochrome-music/monochrome js/api.js
// Will use for download or helpers. i don't know yet
import { QUALITY_TOKENS } from "../constants";

function sanitizeToken(value: string) {
    if (!value) return '';
    return value
        .trim()
        .toUpperCase()
        .replace(/[^A-Z0-9]+/g, '_');
};

export function normalizeQualityToken(value: string) {
    if (!value) return null;

    const token = sanitizeToken(value);

    for (const [quality, aliases] of Object.entries(QUALITY_TOKENS)) {
        if (aliases.includes(token)) {
            return quality;
        }
    }
    return null;
};