export interface APIResponse<T> {
    version: string;
    data: T;
};

export interface JSONAPIDocument<TResource> {
  data: TResource;
  links: {
    self: string;
    [key: string]: string | undefined;
  };
}

export interface JSONAPIResource<TAttributes, TType = string> {
  id: string;
  type: TType;
  attributes: TAttributes;
}

// used in /recommendations and /search
export interface PaginatedData<T> {
  limit: number;
  offset: number;
  totalNumberOfItems: number;
  items: T[];
};

// I'm not really sure if MONO does exist but according to melgu/TidalSwift, it does
export type AudioMode = 'STEREO' | 'MONO' | 'DOLBY_ATMOS' | 'SONY_360RA';
export type AudioQuality = 'LOW' | 'HIGH' | 'LOSSLESS' | 'HI_RES_LOSSLESS' | 'DOLBY_ATMOS';
export type AudioFormat = 'HEAACV1' | 'AACLC' | 'FLAC' | 'FLAC_HIRES' | 'EAC3_JOC';

export type ManifestMimeType = 'application/vnd.tidal.bts' | 'application/dash+xml';
export type AssetPresentation = 'FULL' | 'PREVIEW';
export type TrackPresentation = AssetPresentation;