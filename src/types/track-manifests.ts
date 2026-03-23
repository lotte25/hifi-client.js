import type { AudioFormat, JSONAPIDocument, JSONAPIResource, TrackPresentation } from "./common";

export interface AudioNormalizationData {
  replayGain: number;
  peakAmplitude: number;
};

export interface TrackManifestAttributes {
  trackPresentation: TrackPresentation;
  uri: string;
  hash: string;
  formats: AudioFormat[];
  albumAudioNormalizationData: AudioNormalizationData;
  trackAudioNormalizationData: AudioNormalizationData;
};

export type TrackManifestResource = JSONAPIResource<TrackManifestAttributes, 'trackManifests'>;
export type TrackManifestsResponse = JSONAPIDocument<TrackManifestResource>;