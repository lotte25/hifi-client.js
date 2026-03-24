import type { TrackSearchResponse, SearchResponse } from './search';

export type * from './common';
export type * from './models'

export type * from './info';
export type * from './recommendations';
export type * from './track';
export type * from './track-manifests';
export type * from './search';

export type ManifestType = 'MPEG_DASH' | 'HTTPS' | 'HLS';
export type URIScheme = 'HTTPS' | 'DATA';
export type ManifestUsage = 'PLAYBACK' | 'DOWNLOAD';

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