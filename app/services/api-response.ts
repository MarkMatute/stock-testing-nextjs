export interface ApiResponse<T> {
  items: string;
  sentiment_score_definition: string;
  relevance_score_definition: string;
  feed: T;
}
