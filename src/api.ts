import type { SearchResponseMap, SearchType, TrackInfoResponse, AudioQuality, TrackPlaybackInfo, AudioFormat, ManifestType, ManifestUsage, TrackManifestsResponse, URIScheme } from "./types";
import { request } from "./core/request";

/**
 * Searches in the TIDAL catalog
 * @param type Item type
 * @param query Search query
 * @param limit Result limit
 * @param offset Results to omit
 * @returns A single tracklist or of all types
 */
export async function search<T extends SearchType>(
    type: T,
    query: string,
    limit: number = 15,
    offset: number = 0
): Promise<SearchResponseMap[T]> {
    const res = await request<SearchResponseMap[T]>(
        "search", 
        {
            [type]: query,
            // are we for real
            limit: limit.toString(),
            offset: offset.toString()
        }
    );

    return res;
}

/**
 * Fetches metadata fors a track
 * @param id Track id
 * @returns Track metadata
 */
export async function trackInfo(id: number): Promise<TrackInfoResponse> {
    const res = await request<TrackInfoResponse>(
        'info', 
        {
            id: id.toString()
        }
    );

    return res;
}

/**
 * Fetches playback info for a track. `Dolby Atmos` not properly supported by this endpoint, use {@link trackManifests}
 * @param id Track id
 * @param quality Desired audio quality ({@link AudioQuality})
 * @returns Playback info
 */
export async function track(
    id: number, 
    quality: AudioQuality = 'HI_RES_LOSSLESS'
): Promise<TrackPlaybackInfo> {
    const res = await request<TrackPlaybackInfo>(
        'track',
        {
            id: id.toString(),
            quality,
        }
    );

    return res;
}

/**
 * Fetches manifests for a track
 * @param id Track id
 * @param formats Manifest formats
 * @param adaptive Return multiple formats in one manifest
 * @param manifestType HLS, MPD or HTTPS (base64?)
 * @param uriScheme Plain URL (HTTPS) or base64-encoded manifest
 * @param usage Playback or download
 * @returns A track manifest
 */
export async function trackManifests(
    id: number, 
    formats: AudioFormat[], 
    adaptive: boolean = true, 
    manifestType: ManifestType = 'MPEG_DASH',
    uriScheme: URIScheme = 'HTTPS',
    usage: ManifestUsage = 'PLAYBACK'
): Promise<TrackManifestsResponse> {
    const res = await request<TrackManifestsResponse>(
        'trackManifests',
        {
            id: id.toString(),
            formats,
            adaptive: String(adaptive),
            manifestType,
            uriScheme,
            usage
        }
    );

    return res;
}