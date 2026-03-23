import type { APIResponse, AssetPresentation, AudioMode, AudioQuality, ManifestMimeType } from "./common";

export interface TrackPlaybackInfo {
  trackId: number;
  assetPresentation: AssetPresentation;
  audioMode: AudioMode;
  audioQuality: AudioQuality;
  manifestMimeType: ManifestMimeType;
  manifestHash: string;
  manifest: string; // base64-encoded dash manifest
  albumReplayGain: number;
  albumPeakAmplitude: number;
  trackReplayGain: number;
  trackPeakAmplitude: number;
  bitDepth: number;
  sampleRate: number;
}

export type TrackPlaybackResponse = APIResponse<TrackPlaybackInfo>;