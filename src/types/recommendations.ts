import type { APIResponse, PaginatedData } from "./common";
import type { Track } from "./models";

export type RecommendationSource = 'SUGGESTED_TRACKS' | string;

export interface RecommendationItem {
  track: Track;
  sources: RecommendationSource[];
}

export type RecommendationsResponse = APIResponse<PaginatedData<RecommendationItem>>;