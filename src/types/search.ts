import type { PaginatedData, APIResponse } from "./common";
import type { Track, DetailedArtist, DetailedAlbum, Video, Playlist, Genre } from "./models";

export interface TopHitArtist {
  type: 'ARTISTS';
  value: DetailedArtist;
}

export interface TopHitTrack {
  type: 'TRACKS';
  value: Track;
}

export interface TopHitAlbum {
  type: 'ALBUMS';
  value: DetailedAlbum;
}

export interface TopHitVideo {
  type: 'VIDEOS';
  value: Video;
}

export interface TopHitPlaylist {
  type: 'PLAYLISTS';
  value: Playlist;
}

export type TopHit = 
  | TopHitArtist 
  | TopHitTrack 
  | TopHitAlbum 
  | TopHitVideo 
  | TopHitPlaylist;

export interface SearchResults {
  artists: PaginatedData<DetailedArtist>;
  albums: PaginatedData<DetailedAlbum>;
  playlists: PaginatedData<Playlist>;
  tracks: PaginatedData<Track>;
  videos: PaginatedData<Video>;
  genres: Genre[];
  topHits: TopHit[];
}

export type TrackSearchResponse = APIResponse<PaginatedData<Track>>;
export type SearchResponse = APIResponse<SearchResults>;