import type { TrackSearchResponse, SearchResponse } from './search';

export * from './common';
export * from './models'

export * from './info';
export * from './recommendations';
export * from './track';
export * from './track-manifests';
export * from './search';

// For searching any type with a single function
export enum SearchType {
  tracks = 's',
  artists = 'a',
  albums = 'al',
  videos = 'v',
  playlists = 'p',
  isrc = 'i'
}

export interface SearchResponseMap {
  [SearchType.tracks]: TrackSearchResponse;
  [SearchType.artists]: SearchResponse;
  [SearchType.albums]: SearchResponse;
  [SearchType.videos]: SearchResponse;
  [SearchType.playlists]: SearchResponse;
  [SearchType.isrc]: TrackSearchResponse; 
}

export type ManifestType = 'MPEG_DASH' | 'HTTPS' | 'HLS';
export type URIScheme = 'HTTPS' | 'DATA';
export type ManifestUsage = 'PLAYBACK' | 'DOWNLOAD';