import type { AudioMode, AudioQuality } from "./common";

export type KeyScale = 'MAJOR' | 'MINOR' | string;
export type TrackArtistType = 'MAIN' | 'FEATURED' | string;
export type ArtistType = 'ARTIST' | 'CONTRIBUTOR' | string;
export type AccessType = 'PUBLIC' | 'PRIVATE' | null;
export type MediaMetadataTags = 'LOSSLESS' | 'HIRES_LOSSLESS' | 'DOLBY_ATMOS';

export type AlbumType = 'ALBUM' | 'EP' | 'SINGLE' | string;
export type VideoQuality = 'MP4_1080P' | 'MP4_720P' | string;
export type VideoType = 'Music Video' | string;
export type PlaylistType = 'EDITORIAL' | 'USER' | string;

export interface MediaMetadata {
  tags: MediaMetadataTags[];
}

export interface Mixes {
  TRACK_MIX?: string;
  ARTIST_MIX?: string;
}

export interface ArtistRole {
  categoryId: number;
  category: string;
}

export interface DetailedArtist {
  id: number;
  name: string;
  artistTypes: ArtistType[]; 
  url: string;
  picture: string | null;
  selectedAlbumCoverFallback: string | null;
  popularity: number;
  artistRoles: ArtistRole[];
  mixes: Mixes;
  handle: string | null;
  userId: number | null;
  spotlighted: boolean;
}

export interface Artist {
  id: number;
  name: string;
  handle: string | null;
  type: ArtistType;
  picture: string | null;
}

export interface DetailedAlbum {
  id: number;
  title: string;
  duration: number;
  streamReady: boolean;
  payToStream: boolean;
  adSupportedStreamReady: boolean;
  djReady: boolean;
  stemReady: boolean;
  streamStartDate: string;
  allowStreaming: boolean;
  premiumStreamingOnly: boolean;
  numberOfTracks: number;
  numberOfVideos: number;
  numberOfVolumes: number;
  releaseDate: string; // YYYY-MM-DD
  copyright: string;
  type: AlbumType;
  version: string | null;
  url: string;
  cover: string | null;
  vibrantColor: string | null;
  videoCover: string | null;
  explicit: boolean;
  upc: string;
  popularity: number;
  audioQuality: AudioQuality;
  audioModes: AudioMode[];
  mediaMetadata: MediaMetadata;
  upload: boolean;
  artists: Artist[];
}

export interface Album {
  id: number;
  title: string;
  cover: string | null;
  vibrantColor: string | null;
  videoCover: string | null;
}

export interface Track {
  id: number;
  title: string;
  duration: number;
  replayGain: number;
  peak: number;
  allowStreaming: boolean;
  streamReady: boolean;
  payToStream: boolean;
  adSupportedStreamReady: boolean;
  djReady: boolean;
  stemReady: boolean;
  streamStartDate: string;
  premiumStreamingOnly: boolean;
  trackNumber: number;
  volumeNumber: number;
  version: string | null;
  popularity: number;
  copyright: string;
  bpm: number;
  key: string;
  keyScale: KeyScale;
  url: string;
  isrc: string;
  editable: boolean;
  explicit: boolean;
  audioQuality: AudioQuality;
  audioModes: AudioMode[];
  mediaMetadata: MediaMetadata;
  upload: boolean;
  accessType: AccessType;
  spotlighted: boolean;
  artist: Artist;
  artists: Artist[];
  album: Album;
  mixes: Mixes;
}

export interface Video {
  id: number;
  title: string;
  volumeNumber: number;
  trackNumber: number;
  releaseDate: string;
  imagePath: string | null;
  imageId: string | null;
  vibrantColor: string | null;
  duration: number;
  quality: VideoQuality;
  streamReady: boolean;
  adSupportedStreamReady: boolean;
  djReady: boolean;
  stemReady: boolean;
  streamStartDate: string;
  allowStreaming: boolean;
  explicit: boolean;
  popularity: number;
  type: VideoType;
  adsUrl: string | null;
  adsPrePaywallOnly: boolean;
  artists: Artist[];
  album: Album | null;
}

export interface Playlist {
  uuid: string;
  title: string;
  numberOfTracks: number;
  numberOfVideos: number;
  creator: any; // 
  description: string;
  duration: number;
  lastUpdated: string;
  created: string;
  type: PlaylistType;
  publicPlaylist: boolean;
  url: string;
  image: string | null;
  popularity: number;
  squareImage: string | null;
  customImageUrl: string | null;
  promotedArtists: Artist[];
  lastItemAddedAt: string;
}

export interface PlaylistCreator {
    id: number;
    name: string;
    artistTypes: TrackArtistType[] | null; // this is just a guess. i couldn't find one creator with artists types
    url: string | null;
    picture: string | null;
    selectedAlbumCoverFallback: string | null;
    popularity: number;
    artistRoles: ArtistRole[]; // again, i'm guessing
    mixes: Mixes;
    handle: string | null;
    userId: number | null;
    spotlighted: boolean;
}

export interface Genre {
  apiPath: string;
  title: string;
}